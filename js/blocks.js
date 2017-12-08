Blockly.Blocks['start'] = {
  init: function() {
    // 帽子の形にする。
    // Blockly.BlockSvg.START_HAT = true;
    this.appendDummyInput()
        .appendField("スタート");
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  "category": "category0"
};

Blockly.Blocks['led_on_kids'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LEDを光らせる");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    // category: 1;
  },
  // constructor: "category1"
  // id: "category1"
  "category": "category1"
};

Blockly.Blocks['led_off_kids'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LEDをけす");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  "category": "category1"
};

Blockly.Blocks['wait_kids'] = {
  init: function() {
    this.appendValueInput("second")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("びょうまつ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  "category": "category1"
};

Blockly.Blocks['loop_infinite'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ずっと");
    this.appendStatementInput("contents")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("くりかえす");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  "category": "category2"
};

Blockly.Blocks['loop_number'] = {
  init: function() {
    this.appendValueInput("number")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("回");
    this.appendStatementInput("contents")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("くりかえす");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  "category": "category2"
};

Blockly.Blocks['if_kids'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("もし");
    this.appendValueInput("conditions")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("なら");
    this.appendStatementInput("contents")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  "category": "category3"
};

Blockly.Blocks['if_else_kids'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("もし");
    this.appendValueInput("conditions")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("なら");
    this.appendStatementInput("trueContents")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("そうでなければ");
    this.appendStatementInput("falseContents")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  "category": "category3"
};

Blockly.Blocks['number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0, -32768, 32767), "num");
    this.setOutput(true, "Number");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  "category": "category0"
};
