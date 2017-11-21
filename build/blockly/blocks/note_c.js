Blockly.Blocks['note_c'] = {
  init: function() {
    this.appendValueInput("nextNote")
        .setCheck("note")
        .appendField("ド");
    this.setInputsInline(false);
    this.setOutput(true, "note");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
