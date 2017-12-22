Blockly.IchigoJamBASIC['asc'] = function(block) {
  var value_strings = Blockly.IchigoJamBASIC.valueToCode(block, 'strings', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  // TODO: Assemble IchigoJamBASIC into code variable.

  // 括弧を取り除く
  value_strings = value_strings.substr(1);
  value_strings = value_strings.substr(0,value_strings.length-1);

  var code = "ASC(" + value_strings + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE];
};
