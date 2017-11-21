Blockly.Blocks['let'] = {
  init: function() {
    this.appendValueInput("num")
        .setCheck("Number")
        .appendField("変数")
        .appendField(new Blockly.FieldVariable("A"), "A")
        .appendField("に");
    this.appendDummyInput()
        .appendField("を入れる");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
