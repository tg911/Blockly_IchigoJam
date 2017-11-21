Blockly.Blocks['note_r_kids'] = {
  init: function() {
    this.appendValueInput("nextNote")
        .setCheck("note")
        .appendField("休ふ");
    this.setInputsInline(false);
    this.setOutput(true, "note");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
