Blockly.Blocks['beep'] = {
  init: function() {
    this.appendValueInput("period")
        .setCheck("Number")
        .appendField("周期");
    this.appendValueInput("time")
        .setCheck("Number")
        .appendField("長さ");
    this.appendDummyInput()
        .appendField("の音を鳴らす");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
