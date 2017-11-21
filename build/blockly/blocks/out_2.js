Blockly.Blocks['out_2'] = {
  init: function() {
    function createPinLabel() {
      var options = [];
      for (var i = 1; i <= 6; i++) {
        var pin = document.getElementById("pin-OUT" + i).value;
        if (pin == "") {
          pin = "OUT" + i;
        }
        // options[i] = [pin, String(i+1)];
        options.push([pin, String(i)]);
      }
      return options;
    };
    function createPinDo() {
      var options = [];
      var outOn = document.getElementById("outOn").value;
      var outOff = document.getElementById("outOff").value;
      if (outOn == "") {
        outOn = "オンにする";
      }
      if (outOff == "") {
        outOff = "オフにする";
      }
      options.push([outOn, "1"]);
      options.push([outOff, "0"]);

      return options;
    }
    this.PIN_OUT = createPinLabel();
    this.PIN_DO = createPinDo();
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(this.PIN_OUT), "out")
        // .appendField(new Blockly.FieldDropdown([["OUT1", "1"], ["OUT2", "2"], ["OUT3", "3"], ["OUT4", "4"], ["OUT5", "5"], ["OUT6", "6"]]), "out")
        .appendField("を")
        .appendField(new Blockly.FieldDropdown(this.PIN_DO), "switch");
        // .appendField(new Blockly.FieldDropdown([["オンにする", "1"], ["オフにする", "0"]]), "switch");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.getField('out').menuGenerator_ = this.PIN_OUT;
    this.getField('switch').menuGenerator_ = this.PIN_DO;
  }
};
