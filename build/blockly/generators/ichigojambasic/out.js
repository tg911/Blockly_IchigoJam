Blockly.IchigoJamBASIC['out'] = function(block) {
  var dropdown_output = block.getFieldValue('output');
  var dropdown_boolean = block.getFieldValue('boolean');
  // TODO: Assemble JavaScript into code variable.

  var code = "OUT " + dropdown_output + "," + dropdown_boolean + "\n";
  return code;
};
