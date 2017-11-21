Blockly.Blocks['inkey'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("キーボードから入力されたキーの文字コード");
    this.setOutput(true, "Number");
    this.setColour(315);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
