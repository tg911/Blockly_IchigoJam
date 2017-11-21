Blockly.Blocks['note_length'] = {
  init: function() {
    this.appendValueInput("note")
        .setCheck("note")
        .appendField("：長さ")
        .appendField(new Blockly.FieldNumber(0, 0, 32), "length");
    this.setOutput(true, "note");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
