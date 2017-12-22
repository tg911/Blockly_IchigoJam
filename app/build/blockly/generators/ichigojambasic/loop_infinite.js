Blockly.IchigoJamBASIC['loop_infinite'] = function(block) {
  var statements_contents = Blockly.IchigoJamBASIC.statementToCode(block, 'contents');
  // TODO: Assemble IchigoJamBASIC into code variable.

  // 空白文字を取り除く
  statements_contents = statements_contents.replace(/  /g,"");

  // 改行文字を取り除く
  statements_contents = statements_contents.substr(0,statements_contents.length-1);

  var code = "FOR " + forVar + "=0 TO 9\n" + statements_contents + "\n" + forVar + "=0\nNEXT\n"
  forVar = String.fromCharCode(forVar.charCodeAt(0) + 1)
  return code;
};
