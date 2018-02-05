Blockly.Blocks['play_tune'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["ハッピーバースデー", "a"], ["学校のチャイム", "b"], ["ねこふんじゃった", "c"]]), "tune")
        .appendField("を鳴らす");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
