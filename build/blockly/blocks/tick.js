Blockly.Blocks['tick'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("リセットから経過した時間");
    this.setOutput(true, "Number");
    this.setColour(315);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
