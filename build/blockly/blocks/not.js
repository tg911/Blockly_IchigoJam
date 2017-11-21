Blockly.Blocks['not'] = {
  init: function() {
    this.appendValueInput("arg")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("が0なら1、1なら0");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
