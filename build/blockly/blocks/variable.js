Blockly.Blocks['variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("変数")
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.setOutput(true, "Number");
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
