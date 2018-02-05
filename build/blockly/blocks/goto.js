Blockly.Blocks['goto'] = {
  init: function() {
    this.appendValueInput("lineNum")
        .setCheck(["Number", "Label"]);
    this.appendDummyInput()
        .appendField("へ飛ぶ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
