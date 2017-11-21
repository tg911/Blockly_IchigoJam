Blockly.IchigoJamBASIC['beep'] = function(block) {
  var value_period = Blockly.IchigoJamBASIC.valueToCode(block, 'period', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  var value_time = Blockly.IchigoJamBASIC.valueToCode(block, 'time', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  // TODO: Assemble IchigoJamBASIC into code variable.
  console.log("value_period:" + value_period + "\n" + "value_time:" + value_time + "\n")
  var code = "";
  // 括弧を取り除く
  value_period = value_period.substr(1);
  value_period = value_period.substr(0,value_period.length-1);
  value_time = value_time.substr(1);
  value_time = value_time.substr(0,value_time.length-1);

  // period,timeがそれぞれある時と無い時によって表示を変える
  if(value_period == "" && value_time == "") code = "BEEP\n";
  if(value_period == "" && value_time != "") code = "BEEP " + " ," + value_time + "\n";
  if(value_period != "" && value_time == "") code = "BEEP " + value_period + "\n";
  if(value_period != "" && value_time != "") code = "BEEP " + value_period + "," + value_time + "\n";

  return code;
};
