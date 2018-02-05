Blockly.Blocks['led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LEDを")
        .appendField(new Blockly.FieldDropdown([["オン", "1"], ["オフ", "0"]]), "led")
        .appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
