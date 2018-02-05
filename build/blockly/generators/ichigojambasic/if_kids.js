Blockly.IchigoJamBASIC['if_kids'] = function(block) {
  var value_conditions = Blockly.IchigoJamBASIC.valueToCode(block, 'conditions', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  var statements_contents = Blockly.IchigoJamBASIC.statementToCode(block, 'contents');
  // TODO: Assemble IchigoJamBASIC into code variable.
  // 括弧を取り除く
  value_conditions = value_conditions.substr(1);
  value_conditions = value_conditions.substr(0, value_conditions.length-1);

  // 空白文字を取り除く
  statements_contents = statements_contents.replace(/  /g,"");

  // statements_contents内の最末尾の改行文字を取り除く
  statements_contents = statements_contents.substr(0,statements_contents.length-1);

  // statements_contentsに複数ブロックがある時に最後尾ブロック以外に付く改行文字をコロンに置換
  statements_contents = statements_contents.replace(/\n/g,":");

  var code = "";

  if (value_conditions == "" && statements_contents == "") code = "IF\n"
  if (value_conditions == "" && statements_contents != "") code = "IF THEN " + statements_contents + "\n";
  if (value_conditions != "" && statements_contents == "") code = "IF " + value_conditions + "\n";
  if (value_conditions != "" && statements_contents != "") code = "IF " + value_conditions + " THEN " + statements_contents + "\n";

  return code;
};
