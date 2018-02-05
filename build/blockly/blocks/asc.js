Blockly.Blocks['asc'] = {
  init: function() {
    this.appendValueInput("strings")
        .setCheck("String")
        .appendField("文字");
    this.appendDummyInput()
        .appendField("に対応する文字コード");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(315);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
