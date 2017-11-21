Blockly.IchigoJamBASIC['note_tempo'] = function(block) {
  var number_tempo = block.getFieldValue('tempo');
  var value_note = Blockly.IchigoJamBASIC.valueToCode(block, 'note', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  // TODO: Assemble IchigoJamBASIC into code variable.
  // 括弧を取り除く
  value_note = value_note.substr(1);
  value_note = value_note.substr(0,value_note.length-1);
  
  var code = "T" + number_tempo + value_note;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE];
};
