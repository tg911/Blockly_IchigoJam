Blockly.Blocks['ana_light_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("へやが")
        .appendField(new Blockly.FieldDropdown([["明るい", "bright"], ["くらい", "dark"]]), "brightness");
    this.setOutput(true, "Number");
    this.setColour(315);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
