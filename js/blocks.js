Blockly.Blocks['LEDを光らせる'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LEDを光らせる");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};