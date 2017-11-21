Blockly.Blocks['tempo'] = {
  init: function() {
    this.appendValueInput("arg")
        .setCheck("Number")
        .appendField("音のテンポを");
    this.appendDummyInput()
        .appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
