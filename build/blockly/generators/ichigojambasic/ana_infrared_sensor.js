Blockly.IchigoJamBASIC['ana_infrared_sensor'] = function(block) {
  var dropdown_distance = block.getFieldValue('distance');
  // TODO: Assemble IchigoJamBASIC into code variable.

  var code = ""
  if (dropdown_distance == "near") code = "ANA(2)>=700";
  if (dropdown_distance == "middle") code = "ANA(2)<700 && ANA(2)>300";
  if (dropdown_distance == "far") code = "ANA(2)<=300";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE];
};
