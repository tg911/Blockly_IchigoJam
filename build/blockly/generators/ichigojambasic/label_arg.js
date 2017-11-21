Blockly.IchigoJamBASIC['label_arg'] = function(block) {
  var text_name = block.getFieldValue('name');
  // TODO: Assemble IchigoJamBASIC into code variable.
  var code = "@" + text_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE];
};
