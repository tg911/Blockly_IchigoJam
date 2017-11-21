Blockly.IchigoJamBASIC['note_length_init'] = function(block) {
  var text_notelength = block.getFieldValue('noteLength');
  var value_note = Blockly.IchigoJamBASIC.valueToCode(block, 'note', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  // TODO: Assemble IchigoJamBASIC into code variable.
  // 括弧を取り除く
  value_note = value_note.substr(1);
  value_note = value_note.substr(0,value_note.length-1);
  
  var code = "L" + text_notelength + value_note;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE];
};
