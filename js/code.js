Blockly.IchigoJamBASIC['LEDを光らせる'] = function(block) {
  var code = 'LED 1' + '\n'
  return code;
};

Blockly.IchigoJamBASIC['LEDをけす'] = function(block) {
  var code = 'LED 0' + '\n'
  return code;
};

Blockly.IchigoJamBASIC['待つ'] = function(block) {
  var value_数値 = Blockly.IchigoJamBASIC.valueToCode(block, '数値');
  var code = 'WAIT ' + value_数値 * 60 + '\n'
  return code;
};

Blockly.IchigoJamBASIC['数値'] = function(block) {
  var number_数値 = block.getFieldValue('数値');
  var code = number_数値
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE];
};

Blockly.IchigoJamBASIC['ボタン'] = function(block) {
  var code = 'BTN()'
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE];
};
