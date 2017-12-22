Blockly.IchigoJamBASIC['play'] = function(block) {
  var value_note = Blockly.IchigoJamBASIC.valueToCode(block, 'note', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  // TODO: Assemble IchigoJamBASIC into code variable.
  // 括弧を取り除く
  value_note = value_note.substr(1);
  value_note = value_note.substr(0,value_note.length-1);
  var code = "";
  // noteが無い時はダブルクォートを表示しない
  (value_note == "") ? code = "PLAY\n" : code = "PLAY \"" + value_note + "\"\n";
  console.log("value_note:" + value_note);
  console.log("play_code:" + code);
  return code;
};
