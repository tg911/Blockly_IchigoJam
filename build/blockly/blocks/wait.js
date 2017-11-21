Blockly.Blocks['wait'] = {
  init: function() {
    this.appendValueInput("time")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("の間待つ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
