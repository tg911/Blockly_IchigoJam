Blockly.Blocks['note_e'] = {
  init: function() {
    this.appendValueInput("nextNote")
        .setCheck("note")
        .appendField("ミ");
    this.setInputsInline(false);
    this.setOutput(true, "note");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
