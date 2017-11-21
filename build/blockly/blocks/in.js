Blockly.Blocks['in'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["IN0", "0"], ["IN1", "1"], ["IN2", "2"], ["IN3", "3"], ["IN4", "4"], ["IN5", "5"], ["IN6", "6"], ["IN7", "7"], ["IN8", "8"], ["IN9", "9"], ["IN10", "10"]]), "input")
        .appendField("の状態");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(315);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
