Blockly.Blocks['ana_infrared_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("きょりが")
        .appendField(new Blockly.FieldDropdown([["近い", "near"], ["中くらい", "middle"], ["遠い", "far"]]), "distance");
    this.setOutput(true, "Number");
    this.setColour(315);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
