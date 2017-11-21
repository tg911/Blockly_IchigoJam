Blockly.IchigoJamBASIC['scroll'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  // TODO: Assemble IchigoJamBASIC into code variable.
  var code = "SCROLL " + dropdown_direction + "\n";
  return code;
};
