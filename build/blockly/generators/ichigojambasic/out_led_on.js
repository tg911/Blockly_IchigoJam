Blockly.IchigoJamBASIC['out_led_on'] = function(block) {
  var dropdown_color = block.getFieldValue('color');
  // TODO: Assemble IchigoJamBASIC into code variable.
  var code = "";
  // if (dropdown_color == "blue") code = "OUT 5,1\n";
  if (dropdown_color == "green") code = "OUT 1,1\n";
  if (dropdown_color == "yellow") code = "OUT 2,1\n";
  if (dropdown_color == "red") code = "OUT 3,1\n";
  // if (dropdown_color == "white") code = "OUT 1,1\n";
  return code;
};
