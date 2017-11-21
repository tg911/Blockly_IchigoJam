Blockly.IchigoJamBASIC['out_2'] = function(block) {
  var dropdown_out = block.getFieldValue('out');
  var dropdown_switch = block.getFieldValue('switch');
  // TODO: Assemble IchigoJamBASIC into code variable.
  var code = "OUT " + dropdown_out + "," + dropdown_switch + "\n";
  return code;
};
