Blockly.Blocks['continuity'] = {
  init: function() {
    this.appendValueInput("arg1")
        .setCheck(["Number", "continuity"]);
    this.appendValueInput("arg2")
        .setCheck(["Number", "continuity"])
        .appendField(",");
    this.setInputsInline(true);
    this.setOutput(true, "continuity");
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
