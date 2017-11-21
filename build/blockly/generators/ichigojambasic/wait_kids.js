Blockly.IchigoJamBASIC['wait_kids'] = function(block) {
  var value_second = Blockly.IchigoJamBASIC.valueToCode(block, 'second', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  // TODO: Assemble IchigoJamBASIC into code variable.

  // 括弧を取り除く
  value_second = value_second.substr(1);
  value_second = value_second.substr(0,value_second.length-1);

  value_second *= 60;

  var code = "WAIT " + value_second + "\n";
  return code;
};
