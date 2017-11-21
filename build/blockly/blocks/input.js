Blockly.Blocks['input'] = {
  init: function() {
    this.appendValueInput("strings")
        .setCheck("String")
        .appendField("キーボードから変数")
        .appendField(new Blockly.FieldVariable("A"), "A")
        .appendField("に数値を入れる");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
