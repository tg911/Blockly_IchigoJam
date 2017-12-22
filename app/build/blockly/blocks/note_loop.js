Blockly.Blocks['note_loop'] = {
  init: function() {
    this.appendValueInput("note")
        .setCheck("note")
        .appendField("繰り返す：");
    this.setInputsInline(false);
    this.setOutput(true, "note");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
