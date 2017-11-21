Blockly.Blocks['rnd'] = {
  init: function() {
    this.appendValueInput("random")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("未満のランダムな正数");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(315);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
