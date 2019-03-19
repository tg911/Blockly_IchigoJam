Blockly.Blocks['ichigojam_kanji_led'] = {
  init: function() {
    this.appendValueInput("arg")
    .setCheck("Number")
    .appendField("LEDを");
    this.appendDummyInput()
    .appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_led_arg'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([["オン","1"], ["オフ","0"]]), "led_arg");
    this.setOutput(true, "Number");
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_out'] = {
  init: function() {
    this.appendValueInput("arg1")
    .setCheck("Number")
    .appendField("OUT");
    this.appendValueInput("arg2")
    .setCheck("Number")
    .appendField("を");
    this.appendDummyInput()
    .appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_out_abbreviation'] = {
  init: function() {
    this.appendValueInput("arg1")
    .setCheck("Number")
    .appendField("OUTの出力を");
    this.appendDummyInput()
    .appendField("にする");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_out_arg1'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"]]), "out_arg1");
    this.setOutput(true, "Number");
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_out_arg2'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([["オフ","0"], ["オン","1"], ["IN","-1"], ["-2","-2"]]), "out_arg2");
    this.setOutput(true, "Number");
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_out_abbreviation_arg'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldTextInput("`0101"), "NAME");
    this.setOutput(true, "Number");
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_pwm'] = {
  init: function() {
    this.appendValueInput("pwm_arg1")
    .setCheck("Number")
    .appendField("OUT");
    this.appendValueInput("pwm_arg2")
    .setCheck("Number")
    .appendField("に幅");
    this.appendValueInput("pwm_arg3")
    .setCheck("Number")
    .appendField("周期");
    this.appendDummyInput()
    .appendField("のパルスを出力する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip("幅と周期の単位は0.01ミリ秒です");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_pwm_arg1'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([["2","2"], ["3","3"], ["4","4"], ["5","5"]]), "pwm_arg1");
    this.setOutput(true, "Number");
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_pwm_arg2'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldNumber(100, 0, 2000, 1), "pwm_arg2");
    this.setOutput(true, "Number");
    this.setColour(210);
    this.setTooltip("単位は0.01ミリ秒です");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_pwm_arg3'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldNumber(2000, -Infinity, Infinity, 1), "pwm_arg3");
    this.setOutput(true, "Number");
    this.setColour(210);
    this.setTooltip("単位は0.01ミリ秒です");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_pwm_abbreviation'] = {
  init: function() {
    this.appendValueInput("arg1")
    .setCheck("Number")
    .appendField("OUT");
    this.appendValueInput("arg2")
    .setCheck("Number")
    .appendField("に幅");
    this.appendDummyInput()
    .appendField("のパルスを出力する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip("幅の単位は0.01ミリ秒です");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_cls'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("画面の表示を全て消す");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_input'] = {
  init: function() {
    this.appendValueInput("input_arg")
    .setCheck("String")
    .appendField("キーボードから")
    .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"], ["D","D"], ["E","E"], ["F","F"], ["G","G"], ["H","H"], ["I","I"], ["J","J"], ["K","K"], ["L","L"], ["M","M"], ["N","N"], ["O","O"], ["P","P"], ["Q","Q"], ["R","R"], ["S","S"], ["T","T"], ["U","U"], ["V","V"], ["W","W"], ["X","X"], ["Y","Y"], ["Z","Z"]]), "variables")
    .appendField("に数値を入れる");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_input_arg'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldTextInput("?"), "input_arg");
    this.setOutput(true, "String");
    this.setColour(270);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_locate'] = {
  init: function() {
    this.appendValueInput("locate_arg1")
    .setCheck("Number")
    .appendField("カーソルを横");
    this.appendValueInput("locate_arg2")
    .setCheck("Number")
    .appendField("縦");
    this.appendValueInput("locate_arg3")
    .setCheck("Number")
    .appendField("の位置にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_locate_arg1'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldNumber(0, 0, 31, 1), "locate_arg1");
    this.setOutput(true, "Number");
    this.setColour(270);
    this.setTooltip("横は0~31です");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_locate_arg2'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldNumber(0, -1, 23, 1), "locate_arg2");
    this.setOutput(true, "Number");
    this.setColour(270);
    this.setTooltip("縦は0~23です。-1で文字が非表示になります。");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_locate_arg3'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([["カーソル表示オン"," 1"], ["カーソル表示オフ","0"]]), "locate_arg3");
    this.setOutput(true, "Number");
    this.setColour(270);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_print'] = {
  init: function() {
    this.appendValueInput("print_arg")
    .setCheck(["Number", "String"]);
    this.appendDummyInput()
    .appendField("を表示する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_print_arg'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldTextInput("HELLO"), "print_arg");
    this.setOutput(true, "String");
    this.setColour(270);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_scroll'] = {
  init: function() {
    this.appendValueInput("scroll_arg")
    .setCheck("Number");
    this.appendDummyInput()
    .appendField("に1文字分画面を移動する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_scroll_arg'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([["上","0"], ["右","1"], ["下","2"], ["左","3"]]), "scroll_arg");
    this.setOutput(true, "Number");
    this.setColour(270);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_scr'] = {
  init: function() {
    this.appendValueInput("scr_arg1")
    .setCheck("Number")
    .appendField("横");
    this.appendValueInput("scr_arg2")
    .setCheck("Number")
    .appendField("縦");
    this.appendDummyInput()
    .appendField("の位置に書かれた文字コード");
    this.setOutput(true, "Number");
    this.setColour(270);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_scr_arg1'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldNumber(0, 0, 31, 1), "scr_arg1");
    this.setOutput(true, "Number");
    this.setColour(270);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_scr_arg2'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldNumber(0, 0, 23, 1), "scr_arg2");
    this.setOutput(true, "Number");
    this.setColour(270);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_scr_abbreviation'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("現在のカーソル位置に書かれた文字コード");
    this.setOutput(true, "Number");
    this.setColour(270);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_beep'] = {
  init: function() {
    this.appendValueInput("beep_arg1")
    .setCheck("Number")
    .appendField("周期");
    this.appendValueInput("beep_arg2")
    .setCheck("Number")
    .appendField("長さ");
    this.appendDummyInput()
    .appendField("の音を鳴らす");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
    this.setTooltip("周期は1~255、長さは1/60秒単位で指定して下さい");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_beep_arg1'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldNumber(100, 1, 255, 1), "beep_arg1");
    this.setOutput(true, "Number");
    this.setColour(315);
    this.setTooltip("周期は1-255の範囲で指定して下さい");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_beep_arg2'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 1), "beep_arg2");
    this.setOutput(true, "Number");
    this.setColour(315);
    this.setTooltip("長さの単位は1/60秒です");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_beep_abbreviation'] = {
  init: function() {
    this.appendValueInput("beep_arg1")
    .setCheck("Number")
    .appendField("周期");
    this.appendDummyInput()
    .appendField("の音を鳴らす");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_play'] = {
  init: function() {
    this.appendValueInput("play_arg")
    .setCheck("mml");
    this.appendDummyInput()
    .appendField("を鳴らす");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_tempo'] = {
  init: function() {
    this.appendValueInput("tempo_arg")
    .setCheck("Number")
    .appendField("テンポを");
    this.appendDummyInput()
    .appendField("に変更する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_tempo_arg'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldNumber(120, 0, 999, 1), "tempo_arg");
    this.setOutput(true, "Number");
    this.setColour(315);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_for'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("変数")
    .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"], ["D","D"], ["E","E"], ["F","F"], ["G","G"], ["H","H"], ["I","I"], ["J","J"], ["K","K"], ["L","L"], ["M","M"], ["N","N"], ["O","O"], ["P","P"], ["Q","Q"], ["R","R"], ["S","S"], ["T","T"], ["U","U"], ["V","V"], ["W","W"], ["X","X"], ["Y","Y"], ["Z","Z"]]), "variables");
    this.appendValueInput("for_arg1")
    .setCheck("Number")
    .appendField("を");
    this.appendValueInput("for_arg2")
    .setCheck("Number")
    .appendField("から");
    this.appendDummyInput()
    .appendField("まで");
    this.appendStatementInput("for_process")
    .setCheck(null);
    this.appendValueInput("for_arg3")
    .setCheck("Number");
    this.appendDummyInput()
    .appendField("ずつ変化させながらくり返す");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_for_arg'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 1), "for_arg");
    this.setOutput(true, "Number");
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_goto'] = {
  init: function() {
    this.appendValueInput("goto_arg")
    .setCheck("Number");
    this.appendDummyInput()
    .appendField("へ飛ぶ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_if'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("もし");
    this.appendValueInput("if_arg")
    .setCheck("Number");
    this.appendDummyInput()
    .appendField("なら");
    this.appendStatementInput("if_process")
    .setCheck(null);
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_if_else'] = {
  init: function() {
    this.appendValueInput("if_arg")
    .setCheck("Number")
    .appendField("もし");
    this.appendDummyInput()
    .appendField("なら");
    this.appendStatementInput("if_true_process")
    .setCheck(null);
    this.appendDummyInput()
    .appendField("でなければ");
    this.appendStatementInput("if_false_process")
    .setCheck(null);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_wait'] = {
  init: function() {
    this.appendValueInput("wait_arg")
    .setCheck("Number")
    .appendField("60分の");
    this.appendDummyInput()
    .appendField("秒待つ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_wait_arg'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldNumber(60, -Infinity, 32767, 1), "wait_arg");
    this.setOutput(true, "Number");
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_end'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("プログラムを終了する");
    this.setPreviousStatement(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_ana'] = {
  init: function() {
    this.appendValueInput("ana_arg")
    .setCheck("Number");
    this.appendDummyInput()
    .appendField("の電圧");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_ana_arg'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([["IN2","2"], ["BTN","0"], ["IN5(OUT1)","5"], ["IN6(OUT2)","6"], ["IN7(OUT3)","7"], ["IN8(OUT4)","8"]]), "ana_arg");
    this.setOutput(true, "Number");
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_asc'] = {
  init: function() {
    this.appendValueInput("asc_arg")
    .setCheck("String");
    this.appendDummyInput()
    .appendField("の文字コード");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_asc_arg'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldTextInput("A"), "asc_arg");
    this.setOutput(true, "String");
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_btn'] = {
  init: function() {
    this.appendValueInput("btn_arg")
    .setCheck("Number");
    this.appendDummyInput()
    .appendField("が押された");
    this.setOutput(true, "Number");
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_btn_arg'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([["ボタン","0"], ["上キー","UP"], ["下キー","DOWN"], ["右キー","RIGHT"], ["左キー","LEFT"], ["スペースキー","SPACE"]]), "NAME");
    this.setOutput(true, "Number");
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_chr'] = {
  init: function() {
    this.appendValueInput("chr_arg")
    .setCheck("Number")
    .appendField("文字コード");
    this.appendDummyInput()
    .appendField("の文字");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_chr_arg'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldNumber(0, 0, 255, 1), "chr_arg");
    this.setOutput(true, "Number");
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_clt'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("時間をリセットする");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_in'] = {
  init: function() {
    this.appendValueInput("in_arg")
    .setCheck("Number");
    this.appendDummyInput()
    .appendField("が入力されている");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_in_arg'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([["IN0(ボタン)","0"], ["IN1","1"], ["IN2","2"], ["IN3","3"], ["IN4","4"], ["IN5(OUT1)","5"], ["IN6(OUT2)","6"], ["IN7(OUT3)","7"], ["IN8(OUT4)","8"], ["IN9(ボタン)","9"], ["IN10(OUT5)","10"], ["IN11(OUT6)","11"]]), "in_arg");
    this.setOutput(true, "Number");
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_in_abbreviation'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("全てのINの入力状態");
    this.setOutput(true, "Number");
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_inkey'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("入力されたキーの文字コード");
    this.setOutput(true, "Number");
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_tick'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("経過した時間");
    this.setOutput(true, "Number");
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_rnd'] = {
  init: function() {
    this.appendValueInput("rnd_arg")
    .setCheck("Number");
    this.appendDummyInput()
    .appendField("未満のランダムな正数");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_calculation_operator'] = {
  init: function() {
    this.appendValueInput("calculation_operator_arg1")
    .setCheck("Number");
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([["+","+"], ["-","-"], ["×","*"], ["÷","/"], ["=","="], ["!=","!="], ["<=","<="], ["<","<"], [">=",">="], [">",">"], ["かつ","AND"], ["または","OR"]]), "operator");
    this.appendValueInput("calculation_operator_arg2")
    .setCheck("Number");
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_number'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldNumber(10, -Infinity, Infinity, 1), "number_arg");
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_character'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldTextInput("A"), "character_arg");
    this.setOutput(true, "String");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_addition'] = {
  init: function() {
    this.appendValueInput("addition_arg1")
    .setCheck("Number");
    this.appendValueInput("addition_arg2")
    .setCheck("Number")
    .appendField("+");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_subtraction'] = {
  init: function() {
    this.appendValueInput("subtraction_arg1")
    .setCheck("Number");
    this.appendValueInput("subtraction_arg2")
    .setCheck("Number")
    .appendField("-");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_multiplication'] = {
  init: function() {
    this.appendValueInput("multiplication_arg1")
    .setCheck("Number");
    this.appendValueInput("multiplication_arg2")
    .setCheck("Number")
    .appendField("×");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_division'] = {
  init: function() {
    this.appendValueInput("division_arg1")
    .setCheck("Number");
    this.appendValueInput("division_arg2")
    .setCheck("Number")
    .appendField("÷");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_gt'] = {
  init: function() {
    this.appendValueInput("gt_arg1")
    .setCheck("Number");
    this.appendValueInput("gt_arg2")
    .setCheck("Number")
    .appendField(">");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_gteq'] = {
  init: function() {
    this.appendValueInput("gteq_arg1")
    .setCheck("Number");
    this.appendValueInput("gteq_arg2")
    .setCheck("Number")
    .appendField("≧");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_lt'] = {
  init: function() {
    this.appendValueInput("lt_arg1")
    .setCheck("Number");
    this.appendValueInput("lt_arg2")
    .setCheck("Number")
    .appendField("<");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_lteq'] = {
  init: function() {
    this.appendValueInput("lteq_arg1")
    .setCheck("Number");
    this.appendValueInput("lteq_arg2")
    .setCheck("Number")
    .appendField("≦");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_equal'] = {
  init: function() {
    this.appendValueInput("equal_arg1")
    .setCheck("Number");
    this.appendValueInput("equal_arg2")
    .setCheck("Number")
    .appendField("=");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_and'] = {
  init: function() {
    this.appendValueInput("and_arg1")
    .setCheck("Number");
    this.appendValueInput("and_arg2")
    .setCheck("Number")
    .appendField("かつ");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_or'] = {
  init: function() {
    this.appendValueInput("or_arg1")
    .setCheck("Number");
    this.appendValueInput("or_arg2")
    .setCheck("Number")
    .appendField("または");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_not'] = {
  init: function() {
    this.appendValueInput("not_arg")
    .setCheck("Number");
    this.appendDummyInput()
    .appendField("の逆");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_division_remainder'] = {
  init: function() {
    this.appendValueInput("division_remainder_arg1")
    .setCheck("Number");
    this.appendValueInput("division_remainder_arg2")
    .setCheck("Number")
    .appendField("を");
    this.appendDummyInput()
    .appendField("で割った余り");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_not_equal'] = {
  init: function() {
    this.appendValueInput("not_equal_arg1")
    .setCheck("Number");
    this.appendValueInput("not_equal_arg2")
    .setCheck("Number")
    .appendField("!=");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_label_getter'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("ラベル");
    this.setOutput(true, "Number");
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_let'] = {
  init: function() {
    this.appendValueInput("let_arg")
    .setCheck("Number")
    .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"], ["D","D"], ["E","E"], ["F","F"], ["G","G"], ["H","H"], ["I","I"], ["J","J"], ["K","K"], ["L","L"], ["M","M"], ["N","N"], ["O","O"], ["P","P"], ["Q","Q"], ["R","R"], ["S","S"], ["T","T"], ["U","U"], ["V","V"], ["W","W"], ["X","X"], ["Y","Y"], ["Z","Z"]]), "variables")
    .appendField("に");
    this.appendDummyInput()
    .appendField("を入れる");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_let_arg'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldNumber(0, -32768, 32767, 1), "let_arg");
    this.setOutput(true, "Number");
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_mml_note'] = {
  init: function() {
    this.appendValueInput("mml_arg")
    .setCheck(["mml", "mml_length"])
    .appendField(new Blockly.FieldDropdown([["ド","C"], ["レ","D"], ["ミ","E"], ["ファ","F"], ["ソ","G"], ["ラ","A"], ["シ","B"]]), "note");
    this.setInputsInline(false);
    this.setOutput(true, "mml");
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_mml_length'] = {
  init: function() {
    this.appendValueInput("mml_length_arg")
    .setCheck("mml")
    .appendField("←")
    .appendField(new Blockly.FieldDropdown([[{"src":"img/whole_note.png","width":17,"height":14,"alt":"全音符"},"1"], [{"src":"img/dotted_whole_note.png","width":22,"height":15,"alt":"付点全音符"},"1."], [{"src":"img/half_note.png","width":10,"height":30,"alt":"2分音符"},"2"], [{"src":"img/dotted_half_note.png","width":15,"height":30,"alt":"付点2分音符"},"2."], [{"src":"img/quarter_note.png","width":10,"height":30,"alt":"4分音符"},"4"], [{"src":"img/dotted_quarter_note.png","width":15,"height":30,"alt":"付点4分音符"},"4."], [{"src":"img/eighth_note.png","width":15,"height":30,"alt":"8分音符"},"8"], [{"src":"img/dotted_eighth_note.png","width":15,"height":30,"alt":"付点8分音符"},"8."], [{"src":"img/sixteen_note.png","width":15,"height":30,"alt":"16分音符"},"16"], [{"src":"img/dotted_sixteen_note.png","width":15,"height":30,"alt":"付点16分音符"},"16."], [{"src":"img/thirty_second_note.png","width":15,"height":30,"alt":"32分音符"},"32"], [{"src":"img/dotted_thirty_second_note.png","width":15,"height":30,"alt":"付点32分音符"},"32."]]), "mml_length");
    this.setOutput(true, "mml_length");
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_mml_rest'] = {
  init: function() {
    this.appendValueInput("mml_rest_arg")
    .setCheck("mml")
    .appendField(new Blockly.FieldDropdown([["休符","R"], [{"src":"img/whole_rest.png","width":20,"height":15,"alt":"全休符"},"R1"], [{"src":"img/dotted_whole_rest.png","width":25,"height":15,"alt":"付点全休符"},"R1."], [{"src":"img/half_rest.png","width":20,"height":15,"alt":"2分休符"},"R2"], [{"src":"img/dotted_half_rest.png","width":25,"height":15,"alt":"付点2分休符"},"R2."], [{"src":"img/quarter_rest.png","width":12,"height":30,"alt":"4分休符"},"R4"], [{"src":"img/dotted_quarter_rest.png","width":18,"height":30,"alt":"付点4分休符"},"R4."], [{"src":"img/eighth_rest.png","width":12,"height":30,"alt":"8分休符"},"R8"], [{"src":"img/dotted_eighth_rest.png","width":18,"height":30,"alt":"付点8分休符"},"R8."], [{"src":"img/sixteen_rest.png","width":12,"height":30,"alt":"16分休符"},"R16"], [{"src":"img/dotted_sixteen_rest.png","width":18,"height":30,"alt":"付点16分休符"},"R16."], [{"src":"img/thirty_second_rest.png","width":12,"height":40,"alt":"32分休符"},"R32"], [{"src":"img/dotted_thirty_second_rest.png","width":18,"height":40,"alt":"付点32分休符"},"R32."]]), "mml_rest");
    this.setOutput(true, "mml");
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_mml_tempo'] = {
  init: function() {
    this.appendValueInput("mml_tempo_arg")
    .setCheck("mml")
    .appendField("テンポ")
    .appendField(new Blockly.FieldNumber(100, 0, 120, 1), "mml_tempo");
    this.setOutput(true, "mml");
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_mml_length_init'] = {
  init: function() {
    this.appendValueInput("mml_length_init_arg")
    .setCheck("mml")
    .appendField("長さ")
    .appendField(new Blockly.FieldDropdown([[{"src":"img/whole_note.png","width":17,"height":14,"alt":"全音符"},"1"], [{"src":"img/dotted_whole_note.png","width":22,"height":15,"alt":"付点全音符"},"1."], [{"src":"img/half_note.png","width":10,"height":30,"alt":"2分音符"},"2"], [{"src":"img/dotted_half_note.png","width":15,"height":30,"alt":"付点2分音符"},"2."], [{"src":"img/quarter_note.png","width":10,"height":30,"alt":"4分音符"},"4"], [{"src":"img/dotted_quarter_note.png","width":15,"height":30,"alt":"付点4分音符"},"4."], [{"src":"img/eighth_note.png","width":15,"height":30,"alt":"8分音符"},"8"], [{"src":"img/dotted_eighth_note.png","width":15,"height":30,"alt":"付点8分音符"},"8."], [{"src":"img/sixteen_note.png","width":15,"height":30,"alt":"16分音符"},"16"], [{"src":"img/dotted_sixteen_note.png","width":15,"height":30,"alt":"付点16分音符"},"16."], [{"src":"img/thirty_second_note.png","width":15,"height":30,"alt":"32分音符"},"32"], [{"src":"img/dotted_thirty_second_note.png","width":15,"height":30,"alt":"付点32分音符"},"32."]]), "mml_length");
    this.setInputsInline(false);
    this.setOutput(true, "mml");
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_mml_octave'] = {
  init: function() {
    this.appendValueInput("mml_octave_arg")
    .setCheck("mml")
    .appendField("高さ")
    .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"]]), "mml_octave")
    .appendField("→");
    this.setOutput(true, "mml");
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_mml_octave_up'] = {
  init: function() {
    this.appendValueInput("mml_octave_up_arg")
    .setCheck("mml")
    .appendField("高く→");
    this.setOutput(true, "mml");
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_mml_octave_down'] = {
  init: function() {
    this.appendValueInput("mml_octave_down_arg")
    .setCheck("mml")
    .appendField("低く→");
    this.setOutput(true, "mml");
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_mml_repeat'] = {
  init: function() {
    this.appendValueInput("mml_repeat_arg")
    .setCheck("mml")
    .appendField("以降くり返し");
    this.setOutput(true, "mml");
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_mml_beep'] = {
  init: function() {
    this.appendValueInput("mml_beep_arg")
    .setCheck("mml")
    .appendField("高さ")
    .appendField(new Blockly.FieldNumber(0, 1, 255), "mml_beep")
    .appendField("の音");
    this.setOutput(true, "mml");
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_kanji_mml_end'] = {
  init: function() {
    this.appendValueInput("mml_end")
    .setCheck("mml")
    .appendField("以降鳴らさない");
    this.setOutput(true, "mml");
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ichigojam_hiragana_led'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("https://2.bp.blogspot.com/-c-YOno7GdPI/VIhPFz02-LI/AAAAAAAApmI/IYjhLZrs2hQ/s800/led_red.png", 40, 40, "*"))
    .appendField("をひからせる");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
    Blockly.Blocks['ichigojam_hiragana_led'].svg = this;
    // this.inputList[0].fieldRow[1].textElement_.attributes.y.value = 24;
  }
};

Blockly.Blocks['ichigojam_hiragana_create_new_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("〜〜する"), "new_block_text");
    this.appendStatementInput("contents")
        .setCheck(null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
