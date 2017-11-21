Blockly.Blocks['note_g'] = {
  init: function() {
    this.appendValueInput("nextNote")
        .setCheck("note")
        .appendField("ソ");
    this.setInputsInline(false);
    this.setOutput(true, "note");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
