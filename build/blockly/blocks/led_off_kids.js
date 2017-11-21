Blockly.Blocks['led_off_kids'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LEDをけす");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
