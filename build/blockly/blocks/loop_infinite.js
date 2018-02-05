Blockly.Blocks['loop_infinite'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ずっと");
    this.appendStatementInput("contents")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("くりかえす");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
