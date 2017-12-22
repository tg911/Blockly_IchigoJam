Blockly.Blocks['scr'] = {
  init: function() {
    this.appendValueInput("horizontal")
        .setCheck("Number")
        .appendField("横");
    this.appendValueInput("vertical")
        .setCheck("Number")
        .appendField("縦");
    this.appendDummyInput()
        .appendField("の位置にある文字コード");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(315);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
