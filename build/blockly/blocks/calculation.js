Blockly.Blocks['calculation'] = {
  init: function() {
    this.appendValueInput("arg1")
        .setCheck("Number");
    this.appendValueInput("arg2")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["+", "+"], ["-", "-"], ["*", "*"], ["/", "/"], ["%", "%"], ["AND", "AND"], ["OR", "OR"], ["=", "="], ["<>", "<>"], ["<=", "<="], ["<", "<"], [">=", ">="], [">", ">"]]), "operator");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
