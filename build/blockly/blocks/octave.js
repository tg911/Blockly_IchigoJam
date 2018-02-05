Blockly.Blocks['octave'] = {
  init: function() {
    this.appendValueInput("note")
        .setCheck("note")
        .appendField("オクターブの値")
        .appendField(new Blockly.FieldNumber(0, 1, 5), "octaveNum")
        .appendField("：");
    this.setInputsInline(false);
    this.setOutput(true, "note");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
