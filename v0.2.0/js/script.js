// 漢字
MSG_TOAST_ERR_SELECT_DEVICE = '<i class="material-icons">settings_input_hdmi</i>からIchigoJamが接続されているデバイス名を選んで下さい';
MSG_TOAST_ERR_NOT_FOUND_DEVICE = 'デバイスが見つかりません。USBケーブルが抜けていませんか？'
MSG_TOAST_OK_SEND = 'プログラムの送信が完了しました';
MSG_TOAST_OK_RUN = '実行しました';
MSG_TOAST_OK_STOP = '全ての出力を停止します';
MSG_NAV_DISCONNECT = '切る';
MSG_MODAL_CLEAR = 'ブロックを全て消去しますか？';
MSG_MODAL_SAVE = '作成したプログラムをファイルに保存します';
MSG_MODAL_FILE_NAME = 'ファイル名';
MSG_MODAL_SAVE_YES = '保存';
MSG_MODAL_SAVE_NO = 'キャンセル';
MSG_MODAL_FLYOUT = 'フライアウトを閉じる';
MSG_MODAL_SAVEZERO = 'プログラム送信後に「SAVE0」を実行する';
MSG_MODAL_LANGUAGE = '文字表記';
MSG_MODAL_KANJI = '漢字';
MSG_MODAL_HIRAGANA = 'ひらがな';
MSG_MODAL_SEND_PROGRESS = 'プログラムを送信中...';

// ひらがな
MSG_KIDS_TOAST_ERR_SELECT_DEVICE = '<i class="material-icons">settings_input_hdmi</i>からイチゴジャムをつないでいるばしょをえらんでね';
MSG_KIDS_TOAST_ERR_NOT_FOUND_DEVICE = 'イチゴジャムがみつからないよ。ケーブルがぬけていないかな？'
MSG_KIDS_TOAST_OK_SEND = 'イチゴジャムにプログラムをおくったよ！';
MSG_KIDS_TOAST_OK_RUN = 'イチゴジャムでプログラムをじっこうしたよ！';
MSG_KIDS_TOAST_OK_STOP = 'イチゴジャムでうごかしているものをぜんぶとめたよ！';
MSG_KIDS_NAV_DISCONNECT = 'きる';
MSG_KIDS_MODAL_CLEAR = 'ブロックをぜんぶけしてもいいかな？';
MSG_KIDS_MODAL_SAVE = 'つくったプログラムをパソコンにほぞんするよ！';
MSG_KIDS_MODAL_FILE_NAME = 'プログラムのなまえ';
MSG_KIDS_MODAL_SAVE_YES = 'ほぞん';
MSG_KIDS_MODAL_SAVE_NO = 'やめる';
MSG_KIDS_MODAL_FLYOUT = 'ブロックをとりだすぶぶんをだしっぱなしにする';
MSG_KIDS_MODAL_SAVEZERO = 'ボタンをおしながらでんげんいれて、<br>じっこうできるようにする';
MSG_KIDS_MODAL_LANGUAGE = 'もじ';
MSG_KIDS_MODAL_KANJI = 'かんじ';
MSG_KIDS_MODAL_HIRAGANA = 'ひらがな';
MSG_KIDS_MODAL_SEND_PROGRESS = 'イチゴジャムにプログラムをおくっています...';

Blockly.Msg.RENAME_VARIABLE = "ラベルの名前を変更する";
Blockly.Msg.DELETE_VARIABLE = "ラベル'%1'を削除する";  // untranslated
Blockly.Msg.NEW_VARIABLE = "新しいラベル";
Blockly.Msg.NEW_VARIABLE_TITLE = "新しいラベルの名前";


Blockly.HSV_SATURATION = 0.70;
Blockly.HSV_VALUE = 0.70;

insertToolbox('toolbox.xml', 'toolboxDiv');


$(document).ready(function(){
  $('.sidenav').sidenav();
  $('ul.tabs').tabs();
  $(".dropdown-trigger").dropdown({ constrainWidth: false, coverTrigger: false, onOpenEnd: updatePorts});
  $('select').formSelect();
  $('.modal').modal();
  $('input#input_text, textarea#textarea2').characterCounter();
  var ngui = require('nw.gui');
  var nwin = ngui.Window.get();
  nwin.maximize();
  onResize();

  if (localStorage.getItem('closeFlyoutToggle') == ('off' || undefined)) {
    toolbox.flyout_.autoClose = false;
    // $('.blocklyTreeRow')[1].click();
  }
  if (localStorage.getItem('closeFlyoutToggle') == 'on') {
    $('#closeFlyoutToggle').prop('checked', true);
  }
  if (localStorage.getItem('save0Toggle') == 'on') {
    $('#save0Toggle').prop('checked', true);
  }
  if (localStorage.getItem('language') == 'hiragana') {
    $('#languageOptionHiragana').click();
  }
  if (localStorage.getItem('language') == 'kanji') {
    $('#languageOptionKanji').click();
  }
  screenArea.css('display', 'none');
  // $('#screenSizeSlider').css('display', 'none');

  addBlockToWorkspace('start', "400", "40", false, function() {
    workspace.addChangeListener(Blockly.Events.disableOrphans);
    // workspace.getBlocksByType('start')[0].moveBy(500,0);
    setTimeout(function() {workspace.getBlocksByType('start')[0].moveBy(300,0)}, 100);
  });

  // setTimeout(function() {workspace.getBlocksByType('start')[0].moveBy(500,0)}, 1000);


});

var blocklyArea = document.getElementById("blocklyArea");
var blocklyDiv = document.getElementById("blocklyDiv");
var workspace = Blockly.inject(blocklyDiv, {
  toolbox: document.getElementById('toolbox'),
  grid: {
    spacing: 20,
    length: 3,
    colour: '#ccc',
    snap: true
  },
  media: 'media/',
  zoom: {
    controls: true,
    startScale: 0.8,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2
  },
  trashcan: true,
  scrollbars: true
});
var connectionId = -1; // シリアル接続先の識別番号
var toastNumber = 0; // トーストの背景色設定のためのメッセージ識別番号
var toolbox = workspace.toolbox_;
var screenArea = $('#screenArea');
var cursorPosition = 0;

var onResize = function(e) {
  var element = blocklyArea;
  // var navHeight = $('.nav-extended').height();
  var x = 0;
  var y = 0;

  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  //Position blocklyDiv over blocklyArea
  blocklyDiv.style.left = x + 'px';
  blocklyDiv.style.top = y + 'px';
  // blocklyDiv.style.top = y - navHeight + 'px';
  blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
  blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
  // blocklyDiv.style.height = blocklyArea.offsetHeight - navHeight + 'px';
  Blockly.svgResize(workspace);
};
// window.addEventListener('resize', onResize, false);
$(window).resize(onResize);
// window.addEventListener('resize', Blockly.svgResize(workspace), false);

// outputAreaにworkspaceに置いたブロックのコードを表示する
function showCode() {
  // var outputArea = document.getElementById("outputArea");
  var outputArea = $('#outputArea');
  var code = Blockly.IchigoJamBASIC.workspaceToCode(workspace);
  // outputArea.innerHTML = code;

  // ラベルブロックの実装が変数を流用しているため、'var'が表示されないようにする
  if (code.indexOf('var') != -1) {
    // console.log('ok')
    var codeArray = code.split('\n');
    // console.log(codeArray);
    for (var i=0; i<4; i++) {
      // codeArray[i] = '';
      codeArray.shift();
    }
    code = codeArray.join('\n');
  }
  // console.log(code);

  outputArea.html(code);
  setLineNumber();
};
workspace.addChangeListener(showCode);

// function removeVariableCode() {
//   if ($('#outputArea').val().match(/\n/gm) != null && ($('#outputArea').val().match(/\n/gm).length > 24)) {
//     $('#outputArea').html($('#outputArea').text().slice($('#outputArea').text().indexOf('\n') + 1));
//   }
//   $('#outputArea').html()
// }

function centeringTextInBlockWithImg() {
  Blockly.Blocks['ichigojam_hiragana_led'].svg.inputList[0].fieldRow[1].textElement_.attributes.y.value = 20;

}


// showCodeで表示された文字列に行番号を付与する
function setLineNumber() {
  // var contents = document.getElementById("outputArea");
  var contents = $('#outputArea');

  var lineNum = 10;
  var code = contents.html();
  var sliceCode = code.split('');
  var sliceCodeLength = sliceCode.length;

  for (var i = 0; i < sliceCodeLength; i++) {
    if (i == 0) {
      sliceCode.splice(i, 0, lineNum, " ");
      sliceCodeLength += 2;
      lineNum += 10;
    }
    if (sliceCode[i] == "\n") {
      sliceCode.splice(i + 1, 0, lineNum, " ");
      sliceCodeLength += 2;
      lineNum += 10;
    }
  }

  sliceCode.splice(sliceCode.length - 2, 2);
  code = sliceCode.join("");
  contents.html(code);
};
// workspace.addChangeListener(setLineNumber);

// パソコンに接続されているデバイスをドロップダウンに追加する
function updatePorts() {
  chrome.serial.getDevices(function(devices) {
    $('#connectDropdown li:not(:first)').remove();
    if (connectionId == -1) {
      $('.dropdown-content li:first a').css('color', '#bdbdbd');
      $('.dropdown-content li:first').css('pointer-events', 'none');
    } else {
      $('.dropdown-content li:first a').css('color', '#26a69a');
      $('.dropdown-content li:first').css('pointer-events', 'auto');
    }
    for (var i = 0; i < devices.length; i++) {
      if (i == $('#connectDropdown li:first').attr('selected-device') - 1) {
        $('<li><a href="#!"><i class="material-icons">check_circle</i>' + devices[i].path + '</a></li>').appendTo('#connectDropdown');
        $('.dropdown-content li a').eq(i + 1).css('color', '#bdbdbd');
        $('.dropdown-content li').eq(i + 1).css('pointer-events', 'none');
      } else {
        $('<li><a href="#!">' + devices[i].path + '</a></li>').appendTo('#connectDropdown');
      }
    }
    M.Dropdown.getInstance($('.dropdown-trigger')).recalculateDimensions();
    $('#connectDropdown li').off('click');
    $('#connectDropdown li').on('click', connect);
  });
}

// 引数のデバイス名にシリアル接続する
function connect(deviceName) {
  var selectedPort = $(this).text();
  if (selectedPort == '') selectedPort = deviceName;
  // console.log('dropdown selected', selectedPort);
  $('.dropdown-trigger').css('color', '#ffd600');
  if (selectedPort == '切る') {
    $('#connectDropdown li:first').attr('selected-device', 0);
    disconnect();
  } else {
    $('.dropdown-trigger').css('pointer-events', 'none');
    if (connectionId != -1) {
      disconnect(true);
    }
    chrome.serial.connect(selectedPort, {
      bitrate: 115200
      // receiveTimeout: 5000
    }, function(connectionInfo) {
      if (connectionInfo == undefined) {
        $('.dropdown-trigger').css('color', '#fff');
        $('.dropdown-trigger').css('pointer-events', 'auto');
        M.toast({html: getToastMessage(MSG_TOAST_ERR_NOT_FOUND_DEVICE, MSG_KIDS_TOAST_ERR_NOT_FOUND_DEVICE), classes: 'toast' + toastNumber});
        $('.toast' + toastNumber).css('background-color', '#b71c1c');
        toastNumber++;
        $('#connectDropdown li:first').attr('selected-device', 0);
        return;
      }
      connectionId = connectionInfo.connectionId;
      $('.dropdown-trigger').css('color', '#1de9b6');
      $('.dropdown-trigger').css('pointer-events', 'auto');
      console.log('connected',selectedPort);
    });
    $('#connectDropdown li:first').attr('selected-device', $('#connectDropdown li').index(this));
  }
};

// 接続先から切断する
function disconnect(changeDeviceFlag = false) {
  chrome.serial.disconnect(connectionId, function(result) {
    if (changeDeviceFlag) {
      $('.dropdown-trigger').css('color', '#ffd600');
    } else {
      $('.dropdown-trigger').css('color', '#fff');
    }
    connectionId = -1;
    console.log('disconnected')
  });
};

// ArrayBuffer型を文字列に変換する
function convertArrayBufferToString(arrayBuffer) {
  var uInt8ArrayBuffer = new Uint8Array(arrayBuffer);
  encodedString = String.fromCharCode.apply(null, uInt8ArrayBuffer);

  // return decodeURIComponent(escape(encodedString));
  return encodedString;

}

chrome.serial.onReceive.addListener(function(info) {
  // screenArea.append(convertArrayBufferToString(info.data));
  appendScreenArea(convertArrayBufferToString(info.data));
  console.log('from ichigojam', convertArrayBufferToString(info.data));
  if ($('#screenArea').val().match(/\n/gm) != null && ($('#screenArea').val().match(/\n/gm).length > 24)) {
    console.log('line ok');
    $('#screenArea').html($('#screenArea').text().slice($('#screenArea').text().indexOf('\n') + 1));
  }
});

chrome.serial.onReceiveError.addListener(function (info){
  console.log(info);
  // if (info.error == 'device_lost') {
  //   // var status = document.getElementById("status");
  //   // usbStatus.set(info.error);
  //   connectionId = -1;
  // }
  console.log(info.error, connectionId);

});

// 引数の文字を接続先に送信する
function sendCharacter(char) {
  if (connectionId == -1) return;
  var buffer = new ArrayBuffer(1); // １バイト分（8bit）のバッファを確保
  var view = new Uint8Array(buffer); // 確保したバッファに格納できる値は符号無し8bit整数に指定
  view[0] = char;
  chrome.serial.send(connectionId, buffer, function(sendInfo) {
    // console.log('sent:', buffer);
  });
};

// 引数の文字列を接続先に送信する
function send(basicCode) {
  // console.log('basicCode',basicCode);
  if ($('.dropdown-trigger').css('color') == "rgb(255, 255, 255)") {
    setTimeout(function() {
      $('#progressBarModal').modal('close');
      M.toast({html: getToastMessage(MSG_TOAST_ERR_SELECT_DEVICE, MSG_KIDS_TOAST_ERR_SELECT_DEVICE), classes: 'toast' + toastNumber});
      $('.toast' + toastNumber).css('background-color', '#b71c1c');
      toastNumber++;
    }, 10);
    // $('#progressBarModal').modal('close');
    // M.toast({html: getToastMessage(MSG_TOAST_ERR_SELECT_DEVICE, MSG_KIDS_TOAST_ERR_SELECT_DEVICE), classes: 'toast' + toastNumber});
    // $('.toast' + toastNumber).css('background-color', '#b71c1c');
    // toastNumber++;
    return true;
  }
  var sliceCode = basicCode.split('');
  // console.log('sliceCode', sliceCode);
  var codeLength = sliceCode.length;
  var progressValue = 0;
  var sliceCodePosition = 1;

  $('#progressBar').css('width', progressValue + '%');

  // var saveOption = false;

  // if (connectionStatus == "device_lost") {
  //   connect();
  // }
  //

  // saveOption = document.getElementById("saveOn").firstElementChild.checked;

  // for (var i = 0; i < sliceCode.length; i++) {
  //   // 半角カナ文字に対応するには8bitの文字にする必要がある。（charCodeAtは16bitになる？）
  //   // var encoder = new TextEncoder("utf-8");
  //   // view[i] = encoder.encode(sliceCode[i]);
  //   // console.log("view:" + view[i])
  //   view[i] = sliceCode[i].charCodeAt(0);
  // }

  // console.log(codeLength);
  var intervalId = setInterval(function() {
    progressValue = (sliceCodePosition / codeLength) * 100;
    $('#progressBar').css('width', progressValue + '%');
    sliceCodePosition++;
    // console.log('sent', sliceCode[0]);
    screenArea.append(sliceCode[0]);
    // insertScreenArea(sliceCode[0]);

    sendCharacter(sliceCode[0].charCodeAt(0));
    sliceCode = sliceCode.slice(1);
    if (sliceCode.length == 0) {
      setTimeout(function() {
        $('#progressBarModal').modal('close');
      }, 500)
      clearInterval(intervalId);

      // if (saveOption) {
      //   sendCommand("SAVE0\n");
      // }
      // setTimeout(function() {
      //   // showAlert("success", "プログラムの送信が完了しました。")
      //   // closeButton.click();
      // }, 500);
      // $('#progressBarModal').modal('close');
    }
  }, 20);
};

$('#send').on('click', function() {
  if (!send('NEW\n' + $('#outputArea').html())) {
    if ($('#save0Toggle').prop('checked') == true) send('SAVE0\n');
    M.toast({html: getToastMessage(MSG_TOAST_OK_SEND, MSG_KIDS_TOAST_OK_SEND), classes: 'toast' + toastNumber});
    $('.toast' + toastNumber).css('background-color', '#00bfa5');
    toastNumber++;
  }
});

$('#run').on('click', function(){
  if (!send('RUN\n')) {
    M.toast({html: getToastMessage(MSG_TOAST_OK_RUN, MSG_KIDS_TOAST_OK_RUN), classes: 'toast' + toastNumber});
    $('.toast' + toastNumber).css('background-color', '#00bfa5');
    toastNumber++;
  }
});

$('#stop').on('click', function(){
  if (!send('\x1b\n' + 'OUT0\n')) {
    M.toast({html: getToastMessage(MSG_TOAST_OK_STOP, MSG_KIDS_TOAST_OK_STOP), classes: 'toast' + toastNumber});
    $('.toast' + toastNumber).css('background-color', '#00bfa5');
    toastNumber++;
  }
});

// ワークスペースにあるブロックを全て消す
function clear() {
  workspace.clear();

  // スタートブロックだけ復活させる
  // var xml = '<xml><block type="start" deletable="false"></block></xml>';
  // Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace);
  // workspace.addChangeListener(Blockly.Events.disableOrphans);
};

$('#clearYes').on('click', clear);

// ワークスペースにあるブロックをXML形式で保存する
function setSaveFile() {
  var fileName = $(this).val();
  var xml = Blockly.Xml.workspaceToDom(workspace);
  var xmlText = Blockly.Xml.domToPrettyText(xml);
  var blob = new Blob([xmlText], { type: 'text/xml' });
  var url = window.URL.createObjectURL(blob);
  $('#saveYes').attr('href', url);
  $('#saveYes').attr('download', fileName + ".xml");
  // window.URL.revokeObjectURL(url); // blobとobjectURLの関連を削除（メモリ解放）
};

$('#fileName').on('change', setSaveFile);
$('#saveYes').on('click', function() {
  // window.URL.revokeObjectURL($('#saveYes').attr('href')); // blobとobjectURLの関連を削除（メモリ解放）
})

// 選択したXMLファイルからブロックをワークスペースに読み込む
function load() {
  var input = $('<input>', { type: 'file' });
  // console.log(input);
  input.on('change', function(event) {
    var file = event.target.files[0]; // inputから取得したFileListオブジェクトから読み込んだFileオブジェクトを取得
    var reader = new FileReader(); // Fileオブジェクトの情報を読み込むためにFileReaderオブジェクトを生成する
    reader.readAsText(file); // FileReaderオブジェクトにFileオブジェクトのテキスト情報を読み込む
    reader.onload = function() {
      var xml = Blockly.Xml.textToDom(reader.result); // readAsTextで読み込んだ情報はreader.resultで取得できる
      workspace.clear();
      Blockly.Xml.domToWorkspace(xml, workspace);
    };
  });
  input.click();
};

$('#load').on('click', load);

function toggleProcessing(key, onFunc = function(){}, offFunc = function(){}) {
  if (localStorage.getItem(key) == 'on') {
    onFunc();
    localStorage.setItem(key, 'off');
  } else if (localStorage.getItem(key) == 'off') {
    offFunc();
    localStorage.setItem(key, 'on');
  }
};

$('#closeFlyoutToggle').on('change', function() {
  toggleProcessing('closeFlyoutToggle', function() {
    toolbox.flyout_.autoClose = false;
    // toolbox.flyout_.setVisible(true); // なぜかバグる
  }, function() {
    toolbox.flyout_.autoClose = true;
    // toolbox.flyout_.setVisible(false);
  });
});

$('#save0Toggle').on('change', function() {
  toggleProcessing('save0Toggle');
});

function changeLanguage() {
  if ($('#kanjiRadioBtn').prop('checked') == false) {
    $('#kanjiRadioBtn').prop('checked', false);
    $('#hiraganaRadioBtn').prop('checked', true);
    localStorage.setItem('language', 'hiragana');

    $('#connectDropdown li a:first').html(MSG_KIDS_NAV_DISCONNECT);
    $('#clearMsg').html(MSG_KIDS_MODAL_CLEAR);
    $('#saveMsg').html(MSG_KIDS_MODAL_SAVE);
    $('label[for="fileName"]').html(MSG_KIDS_MODAL_FILE_NAME);
    $('#saveYes').html(MSG_KIDS_MODAL_SAVE_YES);
    $('#saveNo').html(MSG_KIDS_MODAL_SAVE_NO);
    $('#flyoutOptionMsg').html(MSG_KIDS_MODAL_FLYOUT);
    $('#saveZeroOptionMsg').html(MSG_KIDS_MODAL_SAVEZERO);
    $('#languageOptionMsg').html(MSG_KIDS_MODAL_LANGUAGE);
    $('#languageOptionKanji').html(MSG_KIDS_MODAL_KANJI);
    $('#languageOptionHiragana').html(MSG_KIDS_MODAL_HIRAGANA);
    $('#progressMsg').html(MSG_KIDS_MODAL_SEND_PROGRESS);
  } else if ($('#hiraganaRadioBtn').prop('checked') == false) {
    $('#hiraganaRadioBtn').prop('checked', false);
    $('#kanjiRadioBtn').prop('checked', true);
    localStorage.setItem('language', 'kanji');

    $('#connectDropdown li a:first').html(MSG_NAV_DISCONNECT);
    $('#clearMsg').html(MSG_MODAL_CLEAR);
    $('#saveMsg').html(MSG_MODAL_SAVE);
    $('label[for="fileName"]').html(MSG_MODAL_FILE_NAME);
    $('#saveYes').html(MSG_MODAL_SAVE_YES);
    $('#saveNo').html(MSG_MODAL_SAVE_NO);
    $('#flyoutOptionMsg').html(MSG_MODAL_FLYOUT);
    $('#saveZeroOptionMsg').html(MSG_MODAL_SAVEZERO);
    $('#languageOptionMsg').html(MSG_MODAL_LANGUAGE);
    $('#languageOptionKanji').html(MSG_MODAL_KANJI);
    $('#languageOptionHiragana').html(MSG_MODAL_HIRAGANA);
    $('#progressMsg').html(MSG_MODAL_SEND_PROGRESS);
  }
}

$('input[name="language"]').on('change', changeLanguage);

function getToastMessage(kanji, hiragana) {
  var message = 'error';
  if ($('#kanjiRadioBtn').prop('checked') == true) {
    message = kanji;
  } else if ($('#hiraganaRadioBtn').prop('checked') == true) {
    message = hiragana;
  }
  return message;
};

$('#blockTab').on('click', function() {
  if (parseInt($('#blocklyDiv').css('width')) == 0) {
    setTimeout(onResize, 5);
    console.log('resized');
  }
});

function showScreen() {
  var screenBtn = $('#screen');
  var workspaceEl = $('#workspace');
  var screenSizeSlider = $('#screenSizeSlider');
  var floatBtn = $('.nav-content .btn-floating');

  if (screenBtn.val() == true) {
    screenArea.css('display', 'none');
    workspaceEl.css('width', '100%');
    $('#screenSizeSlider').attr('class', 'scale-transition scale-out');
    onResize();
    $('#screen').css('color', '#fff');
    for (var i = 0; i < floatBtn.length; i++) {
      floatBtn.eq(i).css('right', parseInt(floatBtn.eq(i).css('right')) - screenArea.outerWidth() + 'px');
    }
    screenBtn.val(false);
  } else if (screenBtn.val() == false) {
    screenArea.css('display', 'block');
    workspaceEl.css('width', $(window).width() - screenArea.outerWidth() + 'px');

    // screenSizeSlider.css('width', screenArea.outerWidth() + 'px');
    screenSizeSlider.outerWidth(300);
    // $('#screenSizeSlider input').css('width', screenArea.outerWidth() - $('#screenSizeSliderText').width() + 'px');
    // $('#screenSizeSlider input').outerWidth(300 - $('#screenSizeSliderText').outerWidth());
    onResize();
    $('#screen').css('color', '#1de9b6');
    for (var i = 0; i < floatBtn.length; i++) {
      // console.log(floatBtn.eq(i));
      floatBtn.eq(i).css('right', parseInt(floatBtn.eq(i).css('right')) + screenArea.outerWidth() + 'px');
    }
    screenBtn.val(true);
  }


};

$('#screen').on('click', showScreen);

function resizeScreen() {
  var screenBtn = $('#screen');
  if (screenBtn.val() == false) return;
  var workspaceEl = $('#workspace');

  workspaceEl.css('width', $(window).width() - screenArea.outerWidth() + 'px');

  onResize();
}

$(window).resize(resizeScreen);

function changeScreenSize(size) {
  screenArea.css('font-size', size + 'px');
  resizeScreen();
};

$("#screen").hover(function() {
  if ($('#screen').val() == true) {
    $('#screenSizeSlider').attr('class', 'scale-transition');
    $('#screenSizeSlider').css('top', $('.nav-wrapper').outerHeight() / 2 + 'px');
  }
}, function() {
  $('#screenSizeSlider').attr('class', 'scale-transition scale-out');
});


$("#screenSizeSlider").hover(function() {
  $('#screenSizeSlider').attr('class', 'scale-transition');
}, function() {
  $('#screenSizeSlider').attr('class', 'scale-transition scale-out');
});


$('#screenSizeSlider input').on("input", function() {
  var floatBtn = $('.nav-content .btn-floating');
  var beforeScreenSize = screenArea.outerWidth();
  changeScreenSize($('#screenSizeSlider .thumb span').text());
  for (var i = 0; i < floatBtn.length; i++) {
    // console.log(floatBtn.eq(i).css('right'));
    floatBtn.eq(i).css('right', parseInt(floatBtn.eq(i).css('right')) + (screenArea.outerWidth() - beforeScreenSize) + 'px');
  }
});
//
// $('#screenSizeSlider').on('change', function() {
//   var screenSizeSlider = $('#screenSizeSlider');
//
//   screenSizeSlider.css('top', screenArea.outerHeight() + $('.nav-extended').outerHeight() + 'px');
//   screenSizeSlider.css('width', screenArea.outerWidth() + 'px');
//   $('#screenSizeSlider input').css('width', screenArea.outerWidth() - $('#screenSizeSliderText').outerWidth() + 'px');
// });

$('#screenArea').keydown(function(e) {
  // screenArea.blur();
  console.log(e.keyCode);
  var key = e.keyCode;
  // if (key == 13) key = 10; // Enter
  // if (key == 37) key = 28; // ←
  // if (key == 38) key = 30; // →
  // if (key == 39) key = 29; // ↑
  // if (key == 40) key = 31; // ↓
  // if (key == 8) key = ;
  // if (key == ) key = ;
  // if (key == ) key = ;
  // if (key == ) key = ;
  switch (key) {
    case 8:
    screenArea.html(screenArea.html().slice(0, -1));
    sendCharacter(key);
    break;

    case 13:
    key = 10;
    appendScreenArea('\n');
    // insertScreenArea('\n');
    // appendScreenArea('\n');
    sendCharacter(key);
    break;

    case 37:
    key = 28;
    // moveCursor(-1);
    break;

    case 38:
    key = 30;
    // moveCursor(-32);
    break;

    case 39:
    key = 29;
    // moveCursor(1);
    break;

    case 40:
    key = 31;
    // moveCursor(32);
    break;

    case 187:
    key = 43;
    appendScreenArea(String.fromCharCode(key));
    sendCharacter(key);
    break;

    case 190:
    key = 62;
    appendScreenArea(String.fromCharCode(key));
    sendCharacter(key);
    break;

    case 191:
    key = 63;
    appendScreenArea(String.fromCharCode(key));
    sendCharacter(key);
    break;

    case 222:
    key = 34;
    appendScreenArea(String.fromCharCode(key));
    sendCharacter(key);
    break;

    default:
    // appendScreenArea(String.fromCharCode(key));
    // insertScreenArea(String.fromCharCode(key));
    // obj.blur();
    appendScreenArea(String.fromCharCode(key));
    sendCharacter(key);
    console.log('append');
    break;
  }
  // screenArea.focus();
  // if (key != 8) appendScreenArea(String.fromCharCode(key));
  // sendCharacter(key);
})

function insertStr(str, index, insert) {
  return str.slice(0, index) + insert + str.slice(index, str.length);
}

function appendScreenArea(char) {
  screenArea.append(char);
  if ($('#screenArea').val().match(/\n/gm) != null && $('#screenArea').val().match(/\n/gm).length > 23) {
    $('#screenArea').html($('#screenArea').text().slice($('#screenArea').text().indexOf('\n') + 1));
  }
};

function insertScreenArea(char) {
  screenArea.html(insertStr(screenArea.html(), cursorPosition, char));
  if ($('#screenArea').val().match(/\n/gm) != null && ($('#screenArea').val().match(/\n/gm).length > 23)) {
    $('#screenArea').html($('#screenArea').text().slice($('#screenArea').text().indexOf('\n') + 1));
  }
  cursorPosition++;
};

function moveCursor(distance) {
  cursorPosition = cursorPosition + distance;
  // obj.focus();
  // obj.get(0).selectionStart = obj.get(0).selectionStart + val;
  // obj.get(0).selectionStart = obj.get(0).selectionEnd + val;
  // blocklyDiv.focus();
  // obj.blur();
};

// スクリーンで2行以上に渡って文字入力がある（改行が1行目にない）場合にスクリーンがおかしくなるのであとで直す
// var count = 0;
// for (var i = 0; i < $('#screenArea').html().length; i++) {
// 	if ($('#screenArea').text().indexOf('\n', count) - 32 > 0) {
//   		console.log($('#screenArea').text().indexOf('\n', count) - 32);
//     }
// 	count = $('#screenArea').text().indexOf('\n', count);
// }

function insertToolbox(fileName, place) {
  var XMLHR = new XMLHttpRequest();
  XMLHR.onreadystatechange = function() {
    if (XMLHR.readyState == 4 && XMLHR.status == 200) {
      var contents = XMLHR.responseXML;
      // console.log(contents.documentElement);
      var contentsText = new XMLSerializer().serializeToString(contents.documentElement)
      // ＸＭＬファイルではresponseTextではなくresponseXML
      // contentsText = contentsText.slice(0, -6);
      // contentsText += '<category name="くりかえす" colour="#a5935b">' +
      //     '<block type="loop_infinite"></block>' +
      //     '<block type="loop_number">' +
      //       '<value name="number">' +
      //         '<shadow type="数値">' +
      //           '<field name="num"></field>' +
      //         '</shadow>' +
      //       '</value>' +
      //     '</block>' +
      //   '</category>' +
      //   '<category name="もし〜なら" colour="#a55b5b">' +
      //     '<block type="if_kids"></block>' +
      //     '<block type="if_else_kids"></block>' +
      //   '</category>';
      // contentsText += '</xml>';
      // contentsText += '<category name="ラベル" colour="#A65C81" custom="VARIABLE"></category>' +
      // '</xml>';

      // console.log(contentsText);
      document.getElementById(place).innerHTML = contentsText;
      // console.log('loadXML');
    }
  }
  XMLHR.open("GET", fileName, false);
  XMLHR.send(null);
};

function addBlockToWorkspace(blockName, x="400", y="50", deletable=true, callback=function(){}) {
  if (blockName) {
    var xml = '<xml><block type="' + blockName + '" x="' + x + '" y="' + y + '" deletable="' + deletable + '"></block></xml>';
    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace);
    callback();
  } else {
    return;
  }
};

// var beforeFlyoutVisible = true;

// $('.blocklyToolboxDiv').on('click', function() {
//   console.log(toolbox.flyout_.isVisible(),beforeFlyoutVisible);
//   if (toolbox.flyout_.isVisible() == true) {
//     if (beforeFlyoutVisible == false) {
//       workspace.getBlocksByType('start')[0].moveBy(500,0);
//     }
//   } else {
//     workspace.getBlocksByType('start')[0].moveBy(-500,0);
//   }
//   beforeFlyoutVisible = toolbox.flyout_.isVisible();
// });

workspace.registerButtonCallback('createNewBlockBtn', function(){
  var data = '<xml xmlns="http://www.w3.org/1999/xhtml" id="toolbox" style="display: none;">' + $('#toolbox').html() + '</xml>'
  console.log(data);

});
