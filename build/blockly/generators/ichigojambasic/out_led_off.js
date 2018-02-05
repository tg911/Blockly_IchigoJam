Blockly.IchigoJamBASIC['out_led_off'] = function(block) {
  var dropdown_color = block.getFieldValue('color');
  // TODO: Assemble IchigoJamBASIC into code variable.
  var code = "";
  // if (dropdown_color == "blue") code = "OUT 5,0\n";
  if (dropdown_color == "green") code = "OUT 1,0\n";
  if (dropdown_color == "yellow") code = "OUT 2,0\n";
  if (dropdown_color == "red") code = "OUT 3,0\n";
  // if (dropdown_color == "white") code = "OUT 1,0\n";
  return code;
};
