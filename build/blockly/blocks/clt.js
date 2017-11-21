Blockly.Blocks['clt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("時間をリセットする");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
