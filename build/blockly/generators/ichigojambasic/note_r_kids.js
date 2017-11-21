Blockly.IchigoJamBASIC['note_r_kids'] = function(block) {
  var value_nextnote = Blockly.IchigoJamBASIC.valueToCode(block, 'nextNote', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  // TODO: Assemble IchigoJamBASIC into code variable.
  // 括弧を取り除く
  value_nextnote = value_nextnote.substr(1);
  value_nextnote = value_nextnote.substr(0,value_nextnote.length-1);
  // 音符が連結できるように
  var code = "R" + value_nextnote;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE];
};
