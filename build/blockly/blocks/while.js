Blockly.Blocks['while'] = {
  init: function() {
    this.appendValueInput("condition")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("間");
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
