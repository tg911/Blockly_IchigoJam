Blockly.Blocks['note_d'] = {
  init: function() {
    this.appendValueInput("nextNote")
        .setCheck("note")
        .appendField("レ");
    this.setInputsInline(false);
    this.setOutput(true, "note");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
