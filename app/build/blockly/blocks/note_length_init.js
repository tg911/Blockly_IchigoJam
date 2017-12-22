Blockly.Blocks['note_length_init'] = {
  init: function() {
    this.appendValueInput("note")
        .setCheck("note")
        .appendField("指定無しの時の長さ")
        .appendField(new Blockly.FieldTextInput("4"), "noteLength")
        .appendField("：");
    this.setInputsInline(false);
    this.setOutput(true, "note");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
