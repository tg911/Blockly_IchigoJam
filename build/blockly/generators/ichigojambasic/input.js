Blockly.IchigoJamBASIC['input'] = function(block) {
  var variable_a = Blockly.IchigoJamBASIC.variableDB_.getName(block.getFieldValue('A'), Blockly.Variables.NAME_TYPE);
  var value_strings = Blockly.IchigoJamBASIC.valueToCode(block, 'strings', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  // TODO: Assemble IchigoJamBASIC into code variable.
  // 括弧を取り除く
  value_strings = value_strings.substr(1);
  value_strings = value_strings.substr(0, value_strings.length-1);

  var code = "";

  (value_strings == "") ? code = "INPUT " + variable_a + "\n" : code = "INPUT " + value_strings + "," + variable_a + "\n";

  return code;
};
