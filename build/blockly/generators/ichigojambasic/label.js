Blockly.IchigoJamBASIC['label'] = function(block) {
  var text_name = block.getFieldValue('name');
  // TODO: Assemble IchigoJamBASIC into code variable.
  var code = "@" + text_name + "\n";
  return code;
};
