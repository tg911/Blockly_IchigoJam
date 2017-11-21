Blockly.Blocks['chr'] = {
  init: function() {
    this.appendValueInput("chrCode")
        .setCheck(["Number", "continuity"])
        .appendField("文字コード");
    this.appendDummyInput()
        .appendField("に対応する文字");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(315);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
