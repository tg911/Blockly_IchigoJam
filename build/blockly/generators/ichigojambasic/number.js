Blockly.IchigoJamBASIC['number'] = function(block) {
  var number_num = block.getFieldValue('num');
  // TODO: Assemble IchigoJamBASIC into code variable.
  var code = number_num;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE];
};
