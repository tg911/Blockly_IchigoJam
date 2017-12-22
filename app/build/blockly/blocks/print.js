Blockly.Blocks['print'] = {
  init: function() {
    this.appendValueInput("arg")
        .setCheck(["Number", "String"]);
    this.appendDummyInput()
        .appendField("を表示する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
