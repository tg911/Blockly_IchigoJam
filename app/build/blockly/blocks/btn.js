Blockly.Blocks['btn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["ボタン", "0"], ["↑", "UP"], ["↓", "DOWN"], ["→", "RIGHT"], ["←", "LEFT"], ["スペース", "SPACE"]]), "arg")
        .appendField("の状態（オン：1 オフ：0）");
    this.setOutput(true, "Number");
    this.setColour(315);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
