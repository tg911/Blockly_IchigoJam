Blockly.Blocks['LEDを光らせる'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LEDを光らせる");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['LEDをけす'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LEDをけす");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['待つ'] = {
  init: function() {
    this.appendValueInput("数値")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("びょうまつ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['数値'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldNumber(1), "数値");
    this.setOutput(true, "Number");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['ボタン'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ボタンをおしている");
    this.setOutput(true, "Boolean");
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};