Blockly.Blocks['semitone'] = {
  init: function() {
    this.appendValueInput("note")
        .setCheck("note")
        .appendField(new Blockly.FieldDropdown([["：半音 ＋", "+"], ["：半音 －", "-"]]), "upDown");
    this.setInputsInline(false);
    this.setOutput(true, "note");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
