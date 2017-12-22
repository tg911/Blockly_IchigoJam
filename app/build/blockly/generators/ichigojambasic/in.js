Blockly.IchigoJamBASIC['in'] = function(block) {
  var dropdown_input = block.getFieldValue('input');
  // TODO: Assemble IchigoJamBASIC into code variable.
  var code = "IN(" + dropdown_input + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE];
};
