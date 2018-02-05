/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating IchigoJamBASIC for blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.IchigoJamBASIC');

goog.require('Blockly.Generator');


/**
 * IchigoJamBASIC code generator.
 * @type {!Blockly.Generator}
 */
Blockly.IchigoJamBASIC = new Blockly.Generator('IchigoJamBASIC');

/**
 * List of illegal variable names.
 * This is not intended to be a security feature.  Blockly is 100% client-side,
 * so bypassing this list is trivial.  This is intended to prevent users from
 * accidentally clobbering a built-in object or function.
 * @private
 */
Blockly.IchigoJamBASIC.addReservedWords(
    // import keyword
    // print ','.join(keyword.kwlist)
    // http://docs.IchigoJamBASIC.org/reference/lexical_analysis.html#keywords
    'and,as,assert,break,class,continue,def,del,elif,else,except,exec,' +
    'finally,for,from,global,if,import,in,is,lambda,not,or,pass,print,raise,' +
    'return,try,while,with,yield,' +
    //http://docs.IchigoJamBASIC.org/library/constants.html
    'True,False,None,NotImplemented,Ellipsis,__debug__,quit,exit,copyright,' +
    'license,credits,' +
    // http://docs.IchigoJamBASIC.org/library/functions.html
    'abs,divmod,input,open,staticmethod,all,enumerate,int,ord,str,any,eval,' +
    'isinstance,pow,sum,basestring,execfile,issubclass,print,super,bin,file,' +
    'iter,property,tuple,bool,filter,len,range,type,bytearray,float,list,' +
    'raw_input,unichr,callable,format,locals,reduce,unicode,chr,frozenset,' +
    'long,reload,vars,classmethod,getattr,map,repr,xrange,cmp,globals,max,' +
    'reversed,zip,compile,hasattr,memoryview,round,__import__,complex,hash,' +
    'min,set,apply,delattr,help,next,setattr,buffer,dict,hex,object,slice,' +
    'coerce,dir,id,oct,sorted,intern'
);

/**
 * Order of operation ENUMs.
 * http://docs.IchigoJamBASIC.org/reference/expressions.html#summary
 */
Blockly.IchigoJamBASIC.ORDER_ATOMIC = 0;            // 0 "" ...
Blockly.IchigoJamBASIC.ORDER_COLLECTION = 1;        // tuples, lists, dictionaries
Blockly.IchigoJamBASIC.ORDER_STRING_CONVERSION = 1; // `expression...`
Blockly.IchigoJamBASIC.ORDER_MEMBER = 2.1;          // . []
Blockly.IchigoJamBASIC.ORDER_FUNCTION_CALL = 2.2;   // ()
Blockly.IchigoJamBASIC.ORDER_EXPONENTIATION = 3;    // **
Blockly.IchigoJamBASIC.ORDER_UNARY_SIGN = 4;        // + -
Blockly.IchigoJamBASIC.ORDER_BITWISE_NOT = 4;       // ~
Blockly.IchigoJamBASIC.ORDER_MULTIPLICATIVE = 5;    // * / // %
Blockly.IchigoJamBASIC.ORDER_ADDITIVE = 6;          // + -
Blockly.IchigoJamBASIC.ORDER_BITWISE_SHIFT = 7;     // << >>
Blockly.IchigoJamBASIC.ORDER_BITWISE_AND = 8;       // &
Blockly.IchigoJamBASIC.ORDER_BITWISE_XOR = 9;       // ^
Blockly.IchigoJamBASIC.ORDER_BITWISE_OR = 10;       // |
Blockly.IchigoJamBASIC.ORDER_RELATIONAL = 11;       // in, not in, is, is not,
                                            //     <, <=, >, >=, <>, !=, ==
Blockly.IchigoJamBASIC.ORDER_LOGICAL_NOT = 12;      // not
Blockly.IchigoJamBASIC.ORDER_LOGICAL_AND = 13;      // and
Blockly.IchigoJamBASIC.ORDER_LOGICAL_OR = 14;       // or
Blockly.IchigoJamBASIC.ORDER_CONDITIONAL = 15;      // if else
Blockly.IchigoJamBASIC.ORDER_LAMBDA = 16;           // lambda
Blockly.IchigoJamBASIC.ORDER_NONE = 99;             // (...)

/**
 * List of outer-inner pairings that do NOT require parentheses.
 * @type {!Array.<!Array.<number>>}
 */
Blockly.IchigoJamBASIC.ORDER_OVERRIDES = [
  // (foo()).bar -> foo().bar
  // (foo())[0] -> foo()[0]
  [Blockly.IchigoJamBASIC.ORDER_FUNCTION_CALL, Blockly.IchigoJamBASIC.ORDER_MEMBER],
  // (foo())() -> foo()()
  [Blockly.IchigoJamBASIC.ORDER_FUNCTION_CALL, Blockly.IchigoJamBASIC.ORDER_FUNCTION_CALL],
  // (foo.bar).baz -> foo.bar.baz
  // (foo.bar)[0] -> foo.bar[0]
  // (foo[0]).bar -> foo[0].bar
  // (foo[0])[1] -> foo[0][1]
  [Blockly.IchigoJamBASIC.ORDER_MEMBER, Blockly.IchigoJamBASIC.ORDER_MEMBER],
  // (foo.bar)() -> foo.bar()
  // (foo[0])() -> foo[0]()
  [Blockly.IchigoJamBASIC.ORDER_MEMBER, Blockly.IchigoJamBASIC.ORDER_FUNCTION_CALL],

  // not (not foo) -> not not foo
  [Blockly.IchigoJamBASIC.ORDER_LOGICAL_NOT, Blockly.IchigoJamBASIC.ORDER_LOGICAL_NOT],
  // a and (b and c) -> a and b and c
  [Blockly.IchigoJamBASIC.ORDER_LOGICAL_AND, Blockly.IchigoJamBASIC.ORDER_LOGICAL_AND],
  // a or (b or c) -> a or b or c
  [Blockly.IchigoJamBASIC.ORDER_LOGICAL_OR, Blockly.IchigoJamBASIC.ORDER_LOGICAL_OR]
];

/**
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 */
Blockly.IchigoJamBASIC.init = function(workspace) {
  /**
   * Empty loops or conditionals are not allowed in IchigoJamBASIC.
   */
  Blockly.IchigoJamBASIC.PASS = this.INDENT + 'pass\n';
  // Create a dictionary of definitions to be printed before the code.
  Blockly.IchigoJamBASIC.definitions_ = Object.create(null);
  // Create a dictionary mapping desired function names in definitions_
  // to actual function names (to avoid collisions with user functions).
  Blockly.IchigoJamBASIC.functionNames_ = Object.create(null);

  if (!Blockly.IchigoJamBASIC.variableDB_) {
    Blockly.IchigoJamBASIC.variableDB_ =
        new Blockly.Names(Blockly.IchigoJamBASIC.RESERVED_WORDS_);
  } else {
    Blockly.IchigoJamBASIC.variableDB_.reset();
  }

  var defvars = [];
  var variables = workspace.variableList;
  // IchigoJamBASICでは変数一覧をworkspaceに表示しないのでコメントアウト
  // for (var i = 0; i < variables.length; i++) {
  //   defvars[i] = Blockly.IchigoJamBASIC.variableDB_.getName(variables[i],
  //       Blockly.Variables.NAME_TYPE) + ' = None';
  // }
  Blockly.IchigoJamBASIC.definitions_['variables'] = defvars.join('\n');
};

/**
 * Prepend the generated code with the variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.IchigoJamBASIC.finish = function(code) {
  // Convert the definitions dictionary into a list.
  var imports = [];
  var definitions = [];
  for (var name in Blockly.IchigoJamBASIC.definitions_) {
    var def = Blockly.IchigoJamBASIC.definitions_[name];
    if (def.match(/^(from\s+\S+\s+)?import\s+\S+/)) {
      imports.push(def);
    } else {
      definitions.push(def);
    }
  }
  // Clean up temporary data.
  delete Blockly.IchigoJamBASIC.definitions_;
  delete Blockly.IchigoJamBASIC.functionNames_;
  Blockly.IchigoJamBASIC.variableDB_.reset();
  var allDefs = imports.join('\n') + '\n\n' + definitions.join('\n\n');
  return allDefs.replace(/\n\n+/g, '\n\n').replace(/\n*$/, '\n\n\n') + code;
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
Blockly.IchigoJamBASIC.scrubNakedValue = function(line) {
  return line + '\n';
};

/**
 * Encode a string as a properly escaped IchigoJamBASIC string, complete with quotes.
 * @param {string} string Text to encode.
 * @return {string} IchigoJamBASIC string.
 * @private
 */
Blockly.IchigoJamBASIC.quote_ = function(string) {
  // Can't use goog.string.quote since % must also be escaped.
  string = string.replace(/\\/g, '\\\\')
                 .replace(/\n/g, '\\\n')
                 .replace(/\%/g, '\\%')
                 .replace(/'/g, '\\\'');
  return '\'' + string + '\'';
};

/**
 * Common tasks for generating IchigoJamBASIC from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The IchigoJamBASIC code created for this block.
 * @return {string} IchigoJamBASIC code with comments and subsequent blocks added.
 * @private
 */
Blockly.IchigoJamBASIC.scrub_ = function(block, code) {
  var commentCode = '';
  // Only collect comments for blocks that aren't inline.
  if (!block.outputConnection || !block.outputConnection.targetConnection) {
    // Collect comment for this block.
    var comment = block.getCommentText();
    comment = Blockly.utils.wrap(comment, Blockly.IchigoJamBASIC.COMMENT_WRAP - 3);
    if (comment) {
      if (block.getProcedureDef) {
        // Use a comment block for function comments.
        commentCode += '"""' + comment + '\n"""\n';
      } else {
        commentCode += Blockly.IchigoJamBASIC.prefixLines(comment + '\n', 'REM ');
      }
    }
    // Collect comments for all value arguments.
    // Don't collect comments for nested statements.
    for (var i = 0; i < block.inputList.length; i++) {
      if (block.inputList[i].type == Blockly.INPUT_VALUE) {
        var childBlock = block.inputList[i].connection.targetBlock();
        if (childBlock) {
          var comment = Blockly.IchigoJamBASIC.allNestedComments(childBlock);
          if (comment) {
            commentCode += Blockly.IchigoJamBASIC.prefixLines(comment, 'REM ');
          }
        }
      }
    }
  }
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = Blockly.IchigoJamBASIC.blockToCode(nextBlock);
  return commentCode + code + nextCode;
};

/**
 * Gets a property and adjusts the value, taking into account indexing, and
 * casts to an integer.
 * @param {!Blockly.Block} block The block.
 * @param {string} atId The property ID of the element to get.
 * @param {number=} opt_delta Value to add.
 * @param {boolean=} opt_negate Whether to negate the value.
 * @return {string|number}
 */
Blockly.IchigoJamBASIC.getAdjustedInt = function(block, atId, opt_delta, opt_negate) {
  var delta = opt_delta || 0;
  if (block.workspace.options.oneBasedIndex) {
    delta--;
  }
  var defaultAtIndex = block.workspace.options.oneBasedIndex ? '1' : '0';
  var atOrder = delta ? Blockly.IchigoJamBASIC.ORDER_ADDITIVE :
      Blockly.IchigoJamBASIC.ORDER_NONE;
  var at = Blockly.IchigoJamBASIC.valueToCode(block, atId, atOrder) || defaultAtIndex;

  if (Blockly.isNumber(at)) {
    // If the index is a naked number, adjust it right now.
    at = parseInt(at, 10) + delta;
    if (opt_negate) {
      at = -at;
    }
  } else {
    // If the index is dynamic, adjust it in code.
    if (delta > 0) {
      at = 'int(' + at + ' + ' + delta + ')';
    } else if (delta < 0) {
      at = 'int(' + at + ' - ' + -delta + ')';
    } else {
      at = 'int(' + at + ')';
    }
    if (opt_negate) {
      at = '-' + at;
    }
  }
  return at;
};
