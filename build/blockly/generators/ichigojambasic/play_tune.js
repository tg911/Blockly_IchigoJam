Blockly.IchigoJamBASIC['play_tune'] = function(block) {
  var dropdown_tune = block.getFieldValue('tune');
  // TODO: Assemble IchigoJamBASIC into code variable.

  var code;
  if (dropdown_tune == "a") code = "PLAY \"T180G.G8A2G2<C2>B2.R G.G8A2G2<D2C2.>R G.G8<G2E2C.C8>B2A2.R <F.F8E2C2D2C2.R\"\n"
  if (dropdown_tune == "b") code = "PLAY \"T60 BGAD2.R DABG2.R\"\n"
  if (dropdown_tune == "c") code = "PLAY \"T200< D+8C+8>F+8R8<F+F+ D+8C+8>F+8R8<F+F+ D+8C+8>F+8R8<F+>D+<F+>C+<FF D+8C+8>C+8R8<FF D+8C+8>C+8R8<FF D+8C+8>C+<F>D+<F>F+<F+F+\"\n"
  // 記号＜をhtmlエスケープ
  code = code.replace(/</g, '&lt;');

  return code;
};
