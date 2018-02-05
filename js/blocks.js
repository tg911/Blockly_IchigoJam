Blockly.Blocks['LEDオンオフ'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LEDを")
        .appendField(new Blockly.FieldDropdown([["オンにする", "1"], ["オフにする", "0"]]), "選択肢");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
