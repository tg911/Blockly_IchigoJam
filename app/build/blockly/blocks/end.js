Blockly.Blocks['end'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("プログラムを終了する");
    this.setPreviousStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
