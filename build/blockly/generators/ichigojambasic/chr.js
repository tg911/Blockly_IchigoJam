Blockly.IchigoJamBASIC['chr'] = function(block) {
  var value_chrcode = Blockly.IchigoJamBASIC.valueToCode(block, 'chrCode', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  // TODO: Assemble IchigoJamBASIC into code variable.

  // 括弧を取り除く
  value_chrcode = value_chrcode.substr(1);
  value_chrcode = value_chrcode.substr(0,value_chrcode.length-1);

  var code = "CHR$(" + value_chrcode + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE];
};
