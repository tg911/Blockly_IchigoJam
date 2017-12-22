Blockly.Blocks['ana'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["IN0", "0"], ["IN2", "2"], ["IN5", "5"], ["IN6", "6"], ["IN7", "7"], ["IN8", "8"], ["IN9", "9"]]), "input")
        .appendField("の電圧");
    this.setOutput(true, "Number");
    this.setColour(315);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
