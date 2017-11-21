Blockly.IchigoJamBASIC['goto'] = function(block) {
  var value_linenum = Blockly.IchigoJamBASIC.valueToCode(block, 'lineNum', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  // TODO: Assemble IchigoJamBASIC into code variable.
  // 括弧を取り除く
  value_linenum = value_linenum.substr(1);
  value_linenum = value_linenum.substr(0,value_linenum.length-1);
  var code = "GOTO " + value_linenum + "\n";
  return code;
};
