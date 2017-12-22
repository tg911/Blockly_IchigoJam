Blockly.IchigoJamBASIC['calculation'] = function(block) {
  var value_arg1 = Blockly.IchigoJamBASIC.valueToCode(block, 'arg1', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  var dropdown_operator = block.getFieldValue('operator');
  var value_arg2 = Blockly.IchigoJamBASIC.valueToCode(block, 'arg2', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  // TODO: Assemble IchigoJamBASIC into code variable.

  // 括弧を取り除く
  value_arg1 = value_arg1.substr(1);
  value_arg1 = value_arg1.substr(0,value_arg1.length-1);
  value_arg2 = value_arg2.substr(1);
  value_arg2 = value_arg2.substr(0,value_arg2.length-1);

  var code = value_arg1 + dropdown_operator + value_arg2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE];
};
