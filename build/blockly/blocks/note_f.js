Blockly.Blocks['note_f'] = {
  init: function() {
    this.appendValueInput("nextNote")
        .setCheck("note")
        .appendField("ファ");
    this.setInputsInline(false);
    this.setOutput(true, "note");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
