Blockly.IchigoJamBASIC['rnd'] = function(block) {
  var value_random = Blockly.IchigoJamBASIC.valueToCode(block, 'random', Blockly.IchigoJamBASIC.ORDER_ATOMIC);
  // TODO: Assemble IchigoJamBASIC into code variable.

  // 括弧を取り除く
  value_random = value_random.substr(1);
  value_random = value_random.substr(0,value_random.length-1);

  var code = "RND(" + value_random + ")";

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE];
};
