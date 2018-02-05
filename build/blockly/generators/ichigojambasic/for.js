Blockly.IchigoJamBASIC['for'] = function(block) {
  var variable_i = Blockly.IchigoJamBASIC.variableDB_.getName(block.getFieldValue('I'), Blockly.Variables.NAME_TYPE);
  var value_from = Blockly.IchigoJamBASIC.valueToCode(block, 'from', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  var value_to = Blockly.IchigoJamBASIC.valueToCode(block, 'to', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  var value_by = Blockly.IchigoJamBASIC.valueToCode(block, 'by', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  var statements_contents = Blockly.IchigoJamBASIC.statementToCode(block, 'contents');
  // TODO: Assemble IchigoJamBASIC into code variable.
  // 括弧を取り除く
  value_from = value_from.substr(1);
  value_from = value_from.substr(0, value_from.length-1);
  value_to = value_to.substr(1);
  value_to = value_to.substr(0, value_to.length-1);
  value_by = value_by.substr(1);
  value_by = value_by.substr(0, value_by.length-1);

  // 空白文字を取り除く
  // statements_contents = statements_contents.substr(2);
  statements_contents = statements_contents.replace(/  /g,"");

  // 改行文字を取り除く
  // statements_contents = statements_contents.replace(/\r?\n/g,"");
  statements_contents = statements_contents.substr(0,statements_contents.length-1);

  var code = "";

  if (value_from == "" && value_to == "" && value_by == "") code = "FOR\n" + statements_contents + "\n" + "NEXT\n";
  if (value_from == "" && value_to == "" && value_by != "") code = "FOR STEP " + value_by + "\n" + statements_contents + "\n" + "NEXT\n";
  if (value_from == "" && value_to != "" && value_by == "") code = "FOR TO " + value_to + "\n" + statements_contents + "\n" + "NEXT\n";
  if (value_from == "" && value_to != "" && value_by != "") code = "FOR TO " + value_to + " STEP " + value_by + "\n" + statements_contents + "\n" + "NEXT\n";
  if (value_from != "" && value_to == "" && value_by == "") code = "FOR " + variable_i + "=" + value_from + "\n" + statements_contents + "\n" + "NEXT\n";
  if (value_from != "" && value_to == "" && value_by != "") code = "FOR " + variable_i + "=" + value_from + " STEP " + value_by + "\n" + statements_contents + "\n" + "NEXT\n";
  if (value_from != "" && value_to != "" && value_by == "") code = "FOR " + variable_i + "=" + value_from + " TO " + value_to + "\n" + statements_contents + "\n" + "NEXT\n";
  if (value_from != "" && value_to != "" && value_by != "") code = "FOR " + variable_i + "=" + value_from + " TO " + value_to + " STEP " + value_by + "\n" + statements_contents + "\n" + "NEXT\n";

  console.log("statements_contents:" + statements_contents)

  return code;
};
