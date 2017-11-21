Blockly.IchigoJamBASIC['tempo'] = function(block) {
  var value_arg = Blockly.IchigoJamBASIC.valueToCode(block, 'arg', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  // TODO: Assemble IchigoJamBASIC into code variable.
  // 括弧を取り除く
  value_arg = value_arg.substr(1);
  value_arg = value_arg.substr(0, value_arg.length-1);

  var code = "TEMPO " + value_arg + "\n";
  return code;
};
