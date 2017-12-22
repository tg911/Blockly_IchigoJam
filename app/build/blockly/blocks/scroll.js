Blockly.Blocks['scroll'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["上", "UP"], ["右", "RIGHT"], ["下", "DOWN"], ["左", "LEFT"]]), "direction")
        .appendField("方向に1マス分スクロールする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
