Blockly.Blocks['start'] = {
  init: function() {
    // 帽子の形にする。
    // Blockly.BlockSvg.START_HAT = true;
    this.appendDummyInput()
        .appendField("スタート");
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
