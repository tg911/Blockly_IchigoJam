Blockly.IchigoJamBASIC['octave_updown'] = function(block) {
  var dropdown_updown = block.getFieldValue('upDown');
  var value_note = Blockly.IchigoJamBASIC.valueToCode(block, 'note', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  // TODO: Assemble IchigoJamBASIC into code variable.
  // 括弧を取り除く
  value_note = value_note.substr(1);
  value_note = value_note.substr(0,value_note.length-1);

  // 記号＜をhtmlエスケープ
  dropdown_updown = dropdown_updown.replace(/</g, '&lt;');

  var code = dropdown_updown + value_note;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE];
};
