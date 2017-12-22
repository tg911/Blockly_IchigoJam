Blockly.Blocks['test'] = {
  init: function() {
    function createPinLabel() {
      var options = [];
      for (var i = 1; i <= 3; i++) {
        var pin = document.getElementById("pin-OUT" + i).value;
        if (pin == "") {
          pin = "OUT" + i;
        }
        // options[i] = [pin, String(i+1)];
        options.push([pin, String(i)]);
      }
      return options;
    };
    // FieldDropdownの第一引数に必要な二重配列
    this.PIN_OUT = createPinLabel();
    console.log("PIN_OUT:" + this.PIN_OUT)
    this.appendDummyInput()
        // これだとドロップダウンメニューを変えた時にエラーでた。よくわからず
        // .appendField(new Blockly.FieldDropdown(this.PIN_OUT,function() {
        //   var drop = this.getField('test');
        //   console.log("drop:", drop)
        //   drop.menuGenerator_ = this.PIN_OUT;
        // }), "test");
        .appendField(new Blockly.FieldDropdown(this.PIN_OUT), "test");
        // .appendField(new Blockly.FieldDropdown([["OUT1","1"], ["OUT2","2"], ["OUT3","3"]]), "test");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('');
    this.getField('test').menuGenerator_ = this.PIN_OUT;
  }
  // onchangeはよくわからず
  // onchange: function() {
  //   function createPinLabel() {
  //     var options = [];
  //     for (var i = 1; i <= 3; i++) {
  //       var pin = document.getElementById("pin-OUT" + i).value;
  //       if (pin == "") {
  //         pin = "OUT" + i;
  //       }
  //       // options[i] = [pin, String(i+1)];
  //       options.push([pin, String(i)]);
  //     }
  //     return options;
  //   };
  //
  //   var drop = this.getField('test');
  //
  //   drop.menuGenerator_ = createPinLabel();
  //   this.render();
  // }
};

// 参考
// Blockly.Blocks['set-leds'] = {
//   init: function() {
//    this.setColour(0);
//    this.appendValueInput("NAME")
//        .setCheck(null)
//        .appendField("Set LEDs");
//     this.COLOURS =
//    [
//      ["Off", 'off'],
//      ["White", 'white'],
//      ["Red", 'red'],
//      ["Blue", 'Blue'],
//      ["Green", 'green']
//    ];
//    this.FUNCTIONS =
//    [
//      ["1", '1'],
//      ["2", '2'],
//      ["3", '3']
//    ];
//    this.appendDummyInput()
//        .appendField("to function")
//        .appendField(new Blockly.FieldDropdown(this.FUNCTIONS, function(option){
//           var input = this.sourceBlock_.getInput("ti");
//           var fieldExists = this.sourceBlock_.getField('Colour2') !== null;
//           if(option != '1' && fieldExists)
//             input.removeField('Colour2');
//           else if(option == '1' && !fieldExists)
//             input.appendField(new Blockly.FieldDropdown(this.sourceBlock_.COLOURS), 'Colour2');
//        }), 'Function')
//        .appendField("with colour")
//        .appendField(new Blockly.FieldDropdown(this.COLOURS), 'Colour1');
//   this.appendDummyInput("ti")
//        .appendField(new Blockly.FieldDropdown(this.COLOURS), 'Colour2');
//    this.setInputsInline(true);
//    this.setPreviousStatement(true, null);
//    this.setNextStatement(true, null);
//   },
// };
