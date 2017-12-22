Blockly.IchigoJamBASIC['servo'] = function(block) {
  var dropdown_angle = block.getFieldValue('angle');
  // TODO: Assemble IchigoJamBASIC into code variable.
  var code = "PWM 2," + dropdown_angle + "\n";
  return code;
};
