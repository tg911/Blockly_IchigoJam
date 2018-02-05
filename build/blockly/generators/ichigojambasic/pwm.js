Blockly.IchigoJamBASIC['pwm'] = function(block) {
  var dropdown_output = block.getFieldValue('output');
  var number_msec = block.getFieldValue('msec');
  var number_period = block.getFieldValue('period');
  // TODO: Assemble IchigoJamBASIC into code variable.

  var code = "PWM " + dropdown_output + "," + number_msec + "," + number_period + "\n";
  return code;
};
