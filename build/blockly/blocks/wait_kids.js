Blockly.Blocks['wait_kids'] = {
  init: function() {
    this.appendValueInput("second")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("びょうまつ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
