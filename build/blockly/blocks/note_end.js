Blockly.Blocks['note_end'] = {
  init: function() {
    this.appendValueInput("note")
        .setCheck("note")
        .appendField("以降鳴らさない：");
    this.setInputsInline(false);
    this.setOutput(true, "note");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
