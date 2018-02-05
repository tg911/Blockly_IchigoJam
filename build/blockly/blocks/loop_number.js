Blockly.Blocks['loop_number'] = {
  init: function() {
    this.appendValueInput("number")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("回");
    this.appendStatementInput("contents")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("くりかえす");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
