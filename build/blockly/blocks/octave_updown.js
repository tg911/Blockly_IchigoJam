Blockly.Blocks['octave_updown'] = {
  init: function() {
    this.appendValueInput("note")
        .setCheck("note")
        .appendField(new Blockly.FieldDropdown([["1オクターブ ＋ ：", "<"], ["1オクターブ － ：", ">"]]), "upDown");
    this.setInputsInline(false);
    this.setOutput(true, "note");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
