Blockly.Blocks['led_on_kids'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LEDを光らせる");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
