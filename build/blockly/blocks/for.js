Blockly.Blocks['for'] = {
  init: function() {
    this.appendValueInput("from")
        .setCheck("Number")
        .appendField("変数")
        .appendField(new Blockly.FieldVariable("I"), "I")
        .appendField("を");
    this.appendDummyInput()
        .appendField("から");
    this.appendValueInput("to")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("まで");
    this.appendValueInput("by")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("ずつ増やしながら繰り返す");
    this.appendStatementInput("contents")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
