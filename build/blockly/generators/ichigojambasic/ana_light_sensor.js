Blockly.IchigoJamBASIC['ana_light_sensor'] = function(block) {
  var dropdown_brightness = block.getFieldValue('brightness');
  // TODO: Assemble IchigoJamBASIC into code variable.
  var code = "";

  if (dropdown_brightness == "bright") code = "ANA(2)<3";
  if (dropdown_brightness == "dark") code = "ANA(2)>=3";

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE];
};
