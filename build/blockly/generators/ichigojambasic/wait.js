Blockly.IchigoJamBASIC['wait'] = function(block) {
  var value_time = Blockly.IchigoJamBASIC.valueToCode(block, 'time', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  // TODO: Assemble IchigoJamBASIC into code variable.

  // 括弧を取り除く
  value_time = value_time.substr(1);
  value_time = value_time.substr(0,value_time.length-1);

  var code = "WAIT " + value_time + "\n";
  return code;
};
