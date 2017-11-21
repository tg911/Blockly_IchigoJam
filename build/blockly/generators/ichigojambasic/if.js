Blockly.IchigoJamBASIC['if'] = function(block) {
  var value_boolean = Blockly.IchigoJamBASIC.valueToCode(block, 'boolean', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  var statements_contents = Blockly.IchigoJamBASIC.statementToCode(block, 'contents');
  // TODO: Assemble IchigoJamBASIC into code variable.
  // 括弧を取り除く
  value_boolean = value_boolean.substr(1);
  value_boolean = value_boolean.substr(0, value_boolean.length-1);

  // 空白文字を取り除く
  statements_contents = statements_contents.replace(/  /g,"");

  // statements_contents内の最末尾の改行文字を取り除く
  statements_contents = statements_contents.substr(0,statements_contents.length-1);

  // statements_contentsに複数ブロックがある時に最後尾ブロック以外に付く改行文字をコロンに置換
  statements_contents = statements_contents.replace(/\n/g,":");

  var code = "";

  if (value_boolean == "" && statements_contents == "") code = "IF\n"
  if (value_boolean == "" && statements_contents != "") code = "IF THEN " + statements_contents + "\n";
  if (value_boolean != "" && statements_contents == "") code = "IF " + value_boolean + "\n";
  if (value_boolean != "" && statements_contents != "") code = "IF " + value_boolean + " THEN " + statements_contents + "\n";

  console.log("statements_contents:" + statements_contents)

  return code;
};
