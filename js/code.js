Blockly.IchigoJamBASIC['LEDオンオフ'] = function(block) {
  var dropdown_選択肢 = block.getFieldValue('選択肢');
  var code = 'LED ' + dropdown_選択肢 + '\n';
  return code;
};
