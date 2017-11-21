Blockly.IchigoJamBASIC['if_else'] = function(block) {
  var value_boolean = Blockly.IchigoJamBASIC.valueToCode(block, 'boolean', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  var statements_contents = Blockly.IchigoJamBASIC.statementToCode(block, 'contents');
  var statements_elsecontents = Blockly.IchigoJamBASIC.statementToCode(block, 'elseContents');
  // TODO: Assemble IchigoJamBASIC into code variable.
  // 括弧を取り除く
  value_boolean = value_boolean.substr(1);
  value_boolean = value_boolean.substr(0, value_boolean.length-1);

  // 空白文字を取り除く
  statements_contents = statements_contents.replace(/  /g,"");
  statements_elsecontents = statements_elsecontents.replace(/  /g,"");
  // statements_contents = statements_contents.substr(2);
  // statements_elsecontents = statements_elsecontents.substr(2);

  // statements_contentsとstatements_elsecontents内の最末尾の改行文字を取り除く
  statements_contents = statements_contents.substr(0,statements_contents.length-1);
  statements_elsecontents = statements_elsecontents.substr(0,statements_elsecontents.length-1);
  // statements_contents = statements_contents.replace(/\r?\n/g,"");
  // statements_elsecontents = statements_elsecontents.replace(/\r?\n/g,"");

  // statements_contentsとstatements_elsecontentsに複数ブロックがある時に最後尾ブロック以外に付く改行文字をコロンに置換
  statements_contents = statements_contents.replace(/\n/g,":");
  statements_elsecontents = statements_elsecontents.replace(/\n/g,":");

  var code = "";

  if (value_boolean == "" && statements_contents == "" && statements_elsecontents == "") code = "IF\n";
  if (value_boolean == "" && statements_contents == "" && statements_elsecontents != "") code = "IF ELSE " + statements_elsecontents + "\n";
  if (value_boolean == "" && statements_contents != "" && statements_elsecontents == "") code = "IF THEN " + statements_contents + "\n";
  if (value_boolean == "" && statements_contents != "" && statements_elsecontents != "") code = "IF THEN " + statements_contents + " ELSE " + statements_elsecontents + "\n";
  if (value_boolean != "" && statements_contents == "" && statements_elsecontents == "") code = "IF " + value_boolean + "\n";
  if (value_boolean != "" && statements_contents == "" && statements_elsecontents != "") code = "IF " + value_boolean + " ELSE " + statements_elsecontents + "\n";
  if (value_boolean != "" && statements_contents != "" && statements_elsecontents == "") code = "IF " + value_boolean + " THEN " + statements_contents + "\n";
  if (value_boolean != "" && statements_contents != "" && statements_elsecontents != "") code = "IF " + value_boolean + " THEN " + statements_contents + " ELSE " + statements_elsecontents + "\n";

  console.log("statements_contents:" + statements_contents)
  console.log("statements_elsecontents:" + statements_elsecontents)

  return code;
};
