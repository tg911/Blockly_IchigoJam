Blockly.IchigoJamBASIC['led'] = function(block) {
  var dropdown_led = block.getFieldValue('led');
  // TODO: Assemble IchigoJamBASIC into code variable.
  var code = "LED " + dropdown_led + "\n";
  
  return code;
};
