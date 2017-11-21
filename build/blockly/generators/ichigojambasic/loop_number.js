Blockly.IchigoJamBASIC['loop_number'] = function(block) {
  var value_number = Blockly.IchigoJamBASIC.valueToCode(block, 'number', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  var statements_contents = Blockly.IchigoJamBASIC.statementToCode(block, 'contents');
  // TODO: Assemble IchigoJamBASIC into code variable.

  // 括弧を取り除く
  value_number = value_number.substr(1);
  value_number = value_number.substr(0, value_number.length-1);

  // 空白文字を取り除く
  statements_contents = statements_contents.replace(/  /g,"");

  // 改行文字を取り除く
  statements_contents = statements_contents.substr(0,statements_contents.length-1);

  var code = "FOR " + forVar + "=1 TO " + value_number + "\n" + statements_contents + "\nNEXT\n"
  forVar = String.fromCharCode(forVar.charCodeAt(0) + 1)
  return code;
};
