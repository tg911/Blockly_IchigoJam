Blockly.IchigoJamBASIC['if_else_kids'] = function(block) {
  var value_conditions = Blockly.IchigoJamBASIC.valueToCode(block, 'conditions', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  var statements_truecontents = Blockly.IchigoJamBASIC.statementToCode(block, 'trueContents');
  var statements_falsecontents = Blockly.IchigoJamBASIC.statementToCode(block, 'falseContents');
  // TODO: Assemble IchigoJamBASIC into code variable.
  // 括弧を取り除く
  value_conditions = value_conditions.substr(1);
  value_conditions = value_conditions.substr(0, value_conditions.length-1);

  // 空白文字を取り除く
  statements_truecontents = statements_truecontents.replace(/  /g,"");
  statements_falsecontents = statements_falsecontents.replace(/  /g,"");

  // statements_truecontentsとstatements_falsecontents内の最末尾の改行文字を取り除く
  statements_truecontents = statements_truecontents.substr(0,statements_truecontents.length-1);
  statements_falsecontents = statements_falsecontents.substr(0,statements_falsecontents.length-1);

  // statements_falsecontentsとstatements_falsecontentsに複数ブロックがある時に最後尾ブロック以外に付く改行文字をコロンに置換
  statements_truecontents = statements_truecontents.replace(/\n/g,":");
  statements_falsecontents = statements_falsecontents.replace(/\n/g,":");

  var code = "";

  if (value_conditions == "" && statements_truecontents == "" && statements_falsecontents == "") code = "IF\n";
  if (value_conditions == "" && statements_truecontents == "" && statements_falsecontents != "") code = "IF ELSE " + statements_falsecontents + "\n";
  if (value_conditions == "" && statements_truecontents != "" && statements_falsecontents == "") code = "IF THEN " + statements_truecontents + "\n";
  if (value_conditions == "" && statements_truecontents != "" && statements_falsecontents != "") code = "IF THEN " + statements_truecontents + " ELSE " + statements_falsecontents + "\n";
  if (value_conditions != "" && statements_truecontents == "" && statements_falsecontents == "") code = "IF " + value_conditions + "\n";
  if (value_conditions != "" && statements_truecontents == "" && statements_falsecontents != "") code = "IF " + value_conditions + " ELSE " + statements_falsecontents + "\n";
  if (value_conditions != "" && statements_truecontents != "" && statements_falsecontents == "") code = "IF " + value_conditions + " THEN " + statements_truecontents + "\n";
  if (value_conditions != "" && statements_truecontents != "" && statements_falsecontents != "") code = "IF " + value_conditions + " THEN " + statements_truecontents + " ELSE " + statements_falsecontents + "\n";


  return code;
};
