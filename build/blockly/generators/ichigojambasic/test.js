Blockly.IchigoJamBASIC['test'] = function(block) {
  // function createPinLabel() {
  //   var options = [];
  //   for (var i = 1; i <= 3; i++) {
  //     var pin = document.getElementById("pin-OUT" + i).value;
  //     if (pin == "") {
  //       pin = "OUT" + i;
  //     }
  //     console.log("pin:" + i + ":" + pin)
  //     // options[i] = [pin, String(i+1)];
  //     options.push([pin, String(i)]);
  //     console.log("options:",options)
  //   }
  //   return options;
  // };



  var dropdown_test = block.getFieldValue('test');
  // console.log("block:" + block)
  // console.log("block.getFieldValue('test'):" + block.getFieldValue('test'))
  // var drop = block.getField('test')
  // console.log("drop:", drop)

  // drop.menuGenerator_ = createPinLabel();
  // drop.setText("ttttttttt");
  // drop.setValue("ooooooooo");
  // var toolbox = document.getElementById("toolbox");
  // toolbox.refreshSelection();

  // var dropdown = new Blockly.FieldDropdown(createPinLabel);
  // // var dropdown = new Blockly.FieldDropdown([["うんこ","1"],["aaa", "2"], ["ハロー", "3"]]);
  // console.log("cPL:" + createPinLabel())
  // Blockly.Blocks['test'] = {
  //   init: function() {
  //     this.appendDummyInput()
  //         .appendField(dropdown, "test");
  //         // .appendField(new Blockly.FieldDropdown([["OUT1","1"], ["OUT2","2"], ["OUT3","3"]]), "test");
  //     this.setPreviousStatement(true, null);
  //     this.setNextStatement(true, null);
  //     this.setColour(240);
  //     this.setTooltip('');
  //     this.setHelpUrl('');
  //   }
  // };



  // TODO: Assemble JavaScript into code variable.
  var code = "OUT " + dropdown_test + "\n";
  return code;
};
