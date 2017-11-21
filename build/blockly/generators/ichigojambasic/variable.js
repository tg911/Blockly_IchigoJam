Blockly.IchigoJamBASIC['variable'] = function(block) {
  var variable_a = Blockly.IchigoJamBASIC.variableDB_.getName(block.getFieldValue('A'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble IchigoJamBASIC into code variable.
  var code = variable_a;
  console.log("変数:" + variable_a)

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE];
};
