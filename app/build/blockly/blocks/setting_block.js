Blockly.Blocks['foreground_setting'] = {
  init: function() {
    this.appendValueInput("foreground")
        .setCheck("color")
        .appendField("Foreground Color:");
    this.setInputsInline(false);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};