Blockly.Blocks['cls'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("画面を全部消す");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
