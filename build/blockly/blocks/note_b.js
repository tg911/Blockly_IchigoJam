Blockly.Blocks['note_b'] = {
  init: function() {
    this.appendValueInput("nextNote")
        .setCheck("note")
        .appendField("シ");
    this.setInputsInline(false);
    this.setOutput(true, "note");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
