Blockly.IchigoJamBASIC['while'] = function(block) {
  var value_condition = Blockly.IchigoJamBASIC.valueToCode(block, 'condition', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  var statements_contents = Blockly.IchigoJamBASIC.statementToCode(block, 'contents');
  // TODO: Assemble IchigoJamBASIC into code variable.

  // 括弧を取り除く
  value_condition = value_condition.substr(1);
  value_condition = value_condition.substr(0, value_condition.length-1);

  // 空白文字を取り除く
  statements_contents = statements_contents.replace(/  /g,"");

  // 改行文字を取り除く
  statements_contents = statements_contents.substr(0,statements_contents.length-1);

  var code = "FOR " + forVar + "=0 TO 9\n" + statements_contents + "\nIF " + value_condition + " " + forVar + "=0 ELSE " + forVar + "=9\nNEXT\n"
  forVar = String.fromCharCode(forVar.charCodeAt(0) + 1)
  return code;
};
