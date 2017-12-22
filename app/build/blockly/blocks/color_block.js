Blockly.Blocks['color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Color")
        .appendField(new Blockly.FieldColour("#3333ff"), "color");
    this.setInputsInline(false);
    this.setOutput(true, "color");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};