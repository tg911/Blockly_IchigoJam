Blockly.Blocks['if_else_kids'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("もし");
    this.appendValueInput("conditions")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("なら");
    this.appendStatementInput("trueContents")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("そうでなければ");
    this.appendStatementInput("falseContents")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
