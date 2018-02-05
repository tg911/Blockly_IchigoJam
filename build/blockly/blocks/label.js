Blockly.Blocks['label'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("ラベルの名前"), "name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
