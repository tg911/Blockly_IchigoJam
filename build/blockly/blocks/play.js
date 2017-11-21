Blockly.Blocks['play'] = {
  init: function() {
    this.appendValueInput("note")
        .setCheck("note");
    this.appendDummyInput()
        .appendField("を鳴らす");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
