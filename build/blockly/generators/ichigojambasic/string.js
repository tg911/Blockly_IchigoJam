Blockly.IchigoJamBASIC['string'] = function(block) {
  var text_strings = block.getFieldValue('strings');
  // TODO: Assemble IchigoJamBASIC into code variable.

  // 全角文字を半角文字へ変換
  // 記述途中↓失敗したので放置　16/12/13
  // var text_strings = text_strings.replace(/！-～/g, text_strings.charCodeAt(0) - 0xFEE0);

  var code = "\"" + text_strings + "\"";


  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE];
};
