Blockly.IchigoJamBASIC['start'] = function(block) {
  // TODO: Assemble IchigoJamBASIC into code variable.
  var code = '\n';
  return code;
};

Blockly.IchigoJamBASIC['loop_infinite'] = function(block) {
  var statements_contents = Blockly.IchigoJamBASIC.statementToCode(block, 'contents');
  // TODO: Assemble IchigoJamBASIC into code variable.

  // 空白文字を取り除く
  statements_contents = statements_contents.replace(/  /g,"");

  // 改行文字を取り除く
  statements_contents = statements_contents.substr(0,statements_contents.length-1);

  var code = "FOR " + forVar + "=0 TO 9\n" + statements_contents + "\n" + forVar + "=0\nNEXT\n"
  forVar = String.fromCharCode(forVar.charCodeAt(0) + 1)

  return code;
};

Blockly.IchigoJamBASIC['loop_number'] = function(block) {
  var value_number = Blockly.IchigoJamBASIC.valueToCode(block, 'number', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  var statements_contents = Blockly.IchigoJamBASIC.statementToCode(block, 'contents');
  // TODO: Assemble IchigoJamBASIC into code variable.
// console.log(value_number);
  // 括弧を取り除く
  value_number = value_number.substr(1);
  value_number = value_number.substr(0, value_number.length-1);

  // 空白文字を取り除く
  statements_contents = statements_contents.replace(/  /g,"");

  // 改行文字を取り除く
  statements_contents = statements_contents.substr(0,statements_contents.length-1);

  var code = "FOR " + forVar + "=1 TO " + value_number + "\n" + statements_contents + "\nNEXT\n"
  forVar = String.fromCharCode(forVar.charCodeAt(0) + 1)

  return code;
};

Blockly.IchigoJamBASIC['if_kids'] = function(block) {
  var value_conditions = Blockly.IchigoJamBASIC.valueToCode(block, 'conditions', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  var statements_contents = Blockly.IchigoJamBASIC.statementToCode(block, 'contents');
  // TODO: Assemble IchigoJamBASIC into code variable.
  // 括弧を取り除く
  value_conditions = value_conditions.substr(1);
  value_conditions = value_conditions.substr(0, value_conditions.length-1);

  // 空白文字を取り除く
  statements_contents = statements_contents.replace(/  /g,"");

  // statements_contents内の最末尾の改行文字を取り除く
  statements_contents = statements_contents.substr(0,statements_contents.length-1);

  // statements_contentsに複数ブロックがある時に最後尾ブロック以外に付く改行文字をコロンに置換
  statements_contents = statements_contents.replace(/\n/g,":");

  var code = "";

  if (value_conditions == "" && statements_contents == "") code = "IF\n"
  if (value_conditions == "" && statements_contents != "") code = "IF THEN " + statements_contents + "\n";
  if (value_conditions != "" && statements_contents == "") code = "IF " + value_conditions + "\n";
  if (value_conditions != "" && statements_contents != "") code = "IF " + value_conditions + " THEN " + statements_contents + "\n";

  return code;
};

Blockly.IchigoJamBASIC['if_else_kids'] = function(block) {
  var value_conditions = Blockly.IchigoJamBASIC.valueToCode(block, 'conditions', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  var statements_truecontents = Blockly.IchigoJamBASIC.statementToCode(block, 'trueContents');
  var statements_falsecontents = Blockly.IchigoJamBASIC.statementToCode(block, 'falseContents');
  // TODO: Assemble IchigoJamBASIC into code variable.
  // 括弧を取り除く
  value_conditions = value_conditions.substr(1);
  value_conditions = value_conditions.substr(0, value_conditions.length-1);

  // 空白文字を取り除く
  statements_truecontents = statements_truecontents.replace(/  /g,"");
  statements_falsecontents = statements_falsecontents.replace(/  /g,"");

  // statements_truecontentsとstatements_falsecontents内の最末尾の改行文字を取り除く
  statements_truecontents = statements_truecontents.substr(0,statements_truecontents.length-1);
  statements_falsecontents = statements_falsecontents.substr(0,statements_falsecontents.length-1);

  // statements_falsecontentsとstatements_falsecontentsに複数ブロックがある時に最後尾ブロック以外に付く改行文字をコロンに置換
  statements_truecontents = statements_truecontents.replace(/\n/g,":");
  statements_falsecontents = statements_falsecontents.replace(/\n/g,":");

  var code = "";

  if (value_conditions == "" && statements_truecontents == "" && statements_falsecontents == "") code = "IF\n";
  if (value_conditions == "" && statements_truecontents == "" && statements_falsecontents != "") code = "IF ELSE " + statements_falsecontents + "\n";
  if (value_conditions == "" && statements_truecontents != "" && statements_falsecontents == "") code = "IF THEN " + statements_truecontents + "\n";
  if (value_conditions == "" && statements_truecontents != "" && statements_falsecontents != "") code = "IF THEN " + statements_truecontents + " ELSE " + statements_falsecontents + "\n";
  if (value_conditions != "" && statements_truecontents == "" && statements_falsecontents == "") code = "IF " + value_conditions + "\n";
  if (value_conditions != "" && statements_truecontents == "" && statements_falsecontents != "") code = "IF " + value_conditions + " ELSE " + statements_falsecontents + "\n";
  if (value_conditions != "" && statements_truecontents != "" && statements_falsecontents == "") code = "IF " + value_conditions + " THEN " + statements_truecontents + "\n";
  if (value_conditions != "" && statements_truecontents != "" && statements_falsecontents != "") code = "IF " + value_conditions + " THEN " + statements_truecontents + " ELSE " + statements_falsecontents + "\n";


  return code;
};

Blockly.IchigoJamBASIC['variables_get'] = function(block) {
  // Variable getter.
  var code = Blockly.IchigoJamBASIC.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  code.slice(0, -1);
  code = '@' + code;
  return [code, Blockly.IchigoJamBASIC.ORDER_ATOMIC];
};

// Blockly.IchigoJamBASIC['math_change'] = function(block) {
//   // Add to a variable in place.
//   var argument0 = Blockly.IchigoJamBASIC.valueToCode(block, 'DELTA',
//       Blockly.IchigoJamBASIC.ORDER_ADDITION) || '0';
//   var varName = Blockly.IchigoJamBASIC.variableDB_.getName(
//       block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
//   return varName + ' = (typeof ' + varName + ' == \'number\' ? ' + varName +
//       ' : 0) + ' + argument0 + ';\n';
// };

Blockly.IchigoJamBASIC['variables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.IchigoJamBASIC.valueToCode(block, 'VALUE',
      Blockly.IchigoJamBASIC.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.IchigoJamBASIC.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return '@' + varName + '\n';
};

Blockly.IchigoJamBASIC['procedures_defreturn'] = function(block) {
  // Define a procedure with a return value.
  var funcName = Blockly.IchigoJamBASIC.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var branch = Blockly.IchigoJamBASIC.statementToCode(block, 'STACK');
  if (Blockly.IchigoJamBASIC.STATEMENT_PREFIX) {
    branch = Blockly.IchigoJamBASIC.prefixLines(
        Blockly.IchigoJamBASIC.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.IchigoJamBASIC.INDENT) + branch;
  }
  if (Blockly.IchigoJamBASIC.INFINITE_LOOP_TRAP) {
    branch = Blockly.IchigoJamBASIC.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + block.id + '\'') + branch;
  }
  var returnValue = Blockly.IchigoJamBASIC.valueToCode(block, 'RETURN',
      Blockly.IchigoJamBASIC.ORDER_NONE) || '';
  if (returnValue) {
    returnValue = '  return ' + returnValue + ';\n';
  }
  var args = [];
  for (var i = 0; i < block.arguments_.length; i++) {
    args[i] = Blockly.IchigoJamBASIC.variableDB_.getName(block.arguments_[i],
        Blockly.Variables.NAME_TYPE);
  }
  var code = 'function ' + funcName + '(' + args.join(', ') + ') {\n' +
      branch + returnValue + '}';
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
  var funcName = Blockly.IchigoJamBASIC.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var i = 0; i < block.arguments_.length; i++) {
    args[i] = Blockly.IchigoJamBASIC.valueToCode(block, 'ARG' + i,
        Blockly.IchigoJamBASIC.ORDER_COMMA) || 'null';
  }
  var code = funcName + '(' + args.join(', ') + ')';
  return [code, Blockly.IchigoJamBASIC.ORDER_FUNCTION_CALL];
};

Blockly.IchigoJamBASIC['procedures_callnoreturn'] = function(block) {
  // Call a procedure with no return value.
  var funcName = Blockly.IchigoJamBASIC.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var i = 0; i < block.arguments_.length; i++) {
    args[i] = Blockly.IchigoJamBASIC.valueToCode(block, 'ARG' + i,
        Blockly.IchigoJamBASIC.ORDER_COMMA) || 'null';
  }
  var code = funcName + '(' + args.join(', ') + ');\n';
  return code;
};

Blockly.IchigoJamBASIC['procedures_ifreturn'] = function(block) {
  // Conditionally return value from a procedure.
  var condition = Blockly.IchigoJamBASIC.valueToCode(block, 'CONDITION',
      Blockly.IchigoJamBASIC.ORDER_NONE) || 'false';
  var code = 'if (' + condition + ') {\n';
  if (block.hasReturnValue_) {
    var value = Blockly.IchigoJamBASIC.valueToCode(block, 'VALUE',
        Blockly.IchigoJamBASIC.ORDER_NONE) || 'null';
    code += '  return ' + value + ';\n';
  } else {
    code += '  return;\n';
  }
  code += '}\n';
  return code;
};
