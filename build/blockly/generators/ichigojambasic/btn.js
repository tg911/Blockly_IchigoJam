Blockly.IchigoJamBASIC['btn'] = function(block) {
  var dropdown_arg = block.getFieldValue('arg');
  // TODO: Assemble IchigoJamBASIC into code variable.
  var code = "BTN(" + dropdown_arg + ")" ;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE];
};
