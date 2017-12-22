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
 * @fileoverview Generating IchigoJamBASIC for procedure blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.IchigoJamBASIC.procedures');

goog.require('Blockly.IchigoJamBASIC');


Blockly.IchigoJamBASIC['procedures_defreturn'] = function(block) {
  // Define a procedure with a return value.
  // First, add a 'global' statement for every variable that is not shadowed by
  // a local parameter.
  var globals = [];
  for (var i = 0, varName; varName = block.workspace.variableList[i]; i++) {
    if (block.arguments_.indexOf(varName) == -1) {
      globals.push(Blockly.IchigoJamBASIC.variableDB_.getName(varName,
          Blockly.Variables.NAME_TYPE));
    }
  }
  globals = globals.length ? '  global ' + globals.join(', ') + '\n' : '';
  var funcName = Blockly.IchigoJamBASIC.variableDB_.getName(block.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var branch = Blockly.IchigoJamBASIC.statementToCode(block, 'STACK');
  if (Blockly.IchigoJamBASIC.STATEMENT_PREFIX) {
    branch = Blockly.IchigoJamBASIC.prefixLines(
        Blockly.IchigoJamBASIC.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.IchigoJamBASIC.INDENT) + branch;
  }
  if (Blockly.IchigoJamBASIC.INFINITE_LOOP_TRAP) {
    branch = Blockly.IchigoJamBASIC.INFINITE_LOOP_TRAP.replace(/%1/g,
        '"' + block.id + '"') + branch;
  }
  var returnValue = Blockly.IchigoJamBASIC.valueToCode(block, 'RETURN',
      Blockly.IchigoJamBASIC.ORDER_NONE) || '';
  if (returnValue) {
    returnValue = '  return ' + returnValue + '\n';
  } else if (!branch) {
    branch = Blockly.IchigoJamBASIC.PASS;
  }
  var args = [];
  for (var i = 0; i < block.arguments_.length; i++) {
    args[i] = Blockly.IchigoJamBASIC.variableDB_.getName(block.arguments_[i],
        Blockly.Variables.NAME_TYPE);
  }
  var code = 'def ' + funcName + '(' + args.join(', ') + '):\n' +
      globals + branch + returnValue;
  code = Blockly.IchigoJamBASIC.scrub_(block, code);
  // Add % so as not to collide with helper functions in definitions list.
  Blockly.IchigoJamBASIC.definitions_['%' + funcName] = code;
  return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Blockly.IchigoJamBASIC['procedures_defnoreturn'] =
    Blockly.IchigoJamBASIC['procedures_defreturn'];

Blockly.IchigoJamBASIC['procedures_callreturn'] = function(block) {
  // Call a procedure with a return value.
  var funcName = Blockly.IchigoJamBASIC.variableDB_.getName(block.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var i = 0; i < block.arguments_.length; i++) {
    args[i] = Blockly.IchigoJamBASIC.valueToCode(block, 'ARG' + i,
        Blockly.IchigoJamBASIC.ORDER_NONE) || 'None';
  }
  var code = funcName + '(' + args.join(', ') + ')';
  return [code, Blockly.IchigoJamBASIC.ORDER_FUNCTION_CALL];
};

Blockly.IchigoJamBASIC['procedures_callnoreturn'] = function(block) {
  // Call a procedure with no return value.
  var funcName = Blockly.IchigoJamBASIC.variableDB_.getName(block.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var i = 0; i < block.arguments_.length; i++) {
    args[i] = Blockly.IchigoJamBASIC.valueToCode(block, 'ARG' + i,
        Blockly.IchigoJamBASIC.ORDER_NONE) || 'None';
  }
  var code = funcName + '(' + args.join(', ') + ')\n';
  return code;
};

Blockly.IchigoJamBASIC['procedures_ifreturn'] = function(block) {
  // Conditionally return value from a procedure.
  var condition = Blockly.IchigoJamBASIC.valueToCode(block, 'CONDITION',
      Blockly.IchigoJamBASIC.ORDER_NONE) || 'False';
  var code = 'if ' + condition + ':\n';
  if (block.hasReturnValue_) {
    var value = Blockly.IchigoJamBASIC.valueToCode(block, 'VALUE',
        Blockly.IchigoJamBASIC.ORDER_NONE) || 'None';
    code += '  return ' + value + '\n';
  } else {
    code += '  return\n';
  }
  return code;
};
