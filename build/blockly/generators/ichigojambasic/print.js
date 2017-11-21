Blockly.IchigoJamBASIC['print'] = function(block) {
  var value_arg = Blockly.IchigoJamBASIC.valueToCode(block, 'arg', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  // TODO: Assemble IchigoJamBASIC into code variable.
  value_arg = value_arg.substr(1);
  value_arg = value_arg.substr(0,value_arg.length-1);

  var code = "PRINT " + value_arg + "\n";

  console.log("value_arg:" + value_arg)
  return code;
};
