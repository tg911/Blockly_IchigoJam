Blockly.Blocks['note_tempo'] = {
  init: function() {
    this.appendValueInput("note")
        .setCheck("note")
        .appendField("テンポ")
        .appendField(new Blockly.FieldNumber(0, 0, 200), "tempo")
        .appendField("：");
    this.setInputsInline(false);
    this.setOutput(true, "note");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
