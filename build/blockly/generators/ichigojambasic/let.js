Blockly.IchigoJamBASIC['let'] = function(block) {
  var variable_a = Blockly.IchigoJamBASIC.variableDB_.getName(block.getFieldValue('A'), Blockly.Variables.NAME_TYPE);
  var value_num = Blockly.IchigoJamBASIC.valueToCode(block, 'num', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  // TODO: Assemble IchigoJamBASIC into code variable.
  // 括弧を取り除く
  value_num = value_num.substr(1);
  value_num = value_num.substr(0,value_num.length-1);

  var code = "LET " + variable_a + "," + value_num + "\n";
  console.log(code)

  return code;
};
