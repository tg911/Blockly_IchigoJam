Blockly.Blocks['label_arg'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("ラベルの名前"), "name");
    this.setInputsInline(true);
    this.setOutput(true, "Label");
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
