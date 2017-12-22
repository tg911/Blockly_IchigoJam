Blockly.IchigoJamBASIC['scr'] = function(block) {
  var value_horizontal = Blockly.IchigoJamBASIC.valueToCode(block, 'horizontal', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  var value_vertical = Blockly.IchigoJamBASIC.valueToCode(block, 'vertical', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  // TODO: Assemble IchigoJamBASIC into code variable.

  // 括弧を取り除く
  value_horizontal = value_horizontal.substr(1);
  value_horizontal = value_horizontal.substr(0,value_horizontal.length-1);
  value_vertical = value_vertical.substr(1);
  value_vertical = value_vertical.substr(0,value_vertical.length-1);

  var code = "SCR(" + value_horizontal + "," + value_vertical + ")";

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE];
};
