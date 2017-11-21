Blockly.Blocks['servo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("マイクロサーボを")
        .appendField(new Blockly.FieldDropdown([["0°", "240"], ["45°", "193"], ["90°", "145"], ["135°", "98"], ["180°", "50"]]), "angle")
        .appendField("にする");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
