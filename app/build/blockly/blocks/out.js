Blockly.Blocks['out'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("出力")
        .appendField(new Blockly.FieldDropdown([["OUT1", "1"], ["OUT2", "2"], ["OUT3", "3"], ["OUT4", "4"], ["OUT5", "5"], ["OUT6", "6"], ["OUT7", "7"], ["OUT8", "8"], ["OUT9", "9"], ["OUT10", "10"], ["OUT11", "11"]]), "output")
        .appendField("を")
        .appendField(new Blockly.FieldDropdown([["オン", "1"], ["オフ", "0"], ["入力", "-1"]]), "boolean")
        .appendField("にする");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
