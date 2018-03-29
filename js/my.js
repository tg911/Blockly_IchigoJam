connectionId = -1;
// loopInfiniteNum = 0; 没になったループブロックに必要？　没？
forVar = "I"; // くりかえしブロックで使うFORコマンドの変数を異なるようにする

// 起動時にウィンドウを最大化する
window.onload = function() {
  var ngui = require('nw.gui');
  var nwin = ngui.Window.get();
  nwin.maximize();

  // function showCode() {
  //   // console.log('ws-3', workspace);
  //   var outputArea = document.getElementById("outputArea");
  //   var code = Blockly.IchigoJamBASIC.workspaceToCode(workspace);
  //   outputArea.innerHTML = code;
  // };
  // // workspaceのリスナーへ登録を忘れずに
  // workspace.addChangeListener(showCode);

  // function setLineNumber() {
  //   var contents = document.getElementById("outputArea");
  //   var lineNum = 10;
  //   var code = contents.innerText;
  //   var sliceCode = code.split('');
  //
  //   var sliceCodeLength = sliceCode.length;
  //
  //   for (var i = 0; i < sliceCodeLength; i++) {
  //     if (i == 0) {
  //       sliceCode.splice(i, 0, lineNum, " ");
  //       sliceCodeLength += 2;
  //       lineNum += 10;
  //     }
  //     if (sliceCode[i] == "\n") {
  //       sliceCode.splice(i + 1, 0, lineNum, " ");
  //       sliceCodeLength += 2;
  //       lineNum += 10;
  //     }
  //   }
  //   sliceCode.splice(sliceCode.length - 2, 2);
  //   code = sliceCode.join("");
  //   contents.innerText = code;
  // };
  //
  // workspace.addChangeListener(setLineNumber);
  //
  // var xml = '<xml><block type="start" deletable="false"></block></xml>';
  // Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace);
  // workspace.addChangeListener(Blockly.Events.disableOrphans);

};

// function insertXml(fileName, place) {
//     var XMLHR = new XMLHttpRequest();
//     XMLHR.onreadystatechange = function() {
//         if (XMLHR.readyState == 4 && XMLHR.status == 200) {
//             var contents = XMLHR.responseXML;
//             // console.log(contents.documentElement);
//             var contentsText = new XMLSerializer().serializeToString(contents.documentElement)
//             // ＸＭＬファイルではresponseTextではなくresponseXML
//             document.getElementById(place).innerHTML = contentsText;
//             console.log('loadXML');
//         }
//     }
//     XMLHR.open("GET", fileName, false);
//     XMLHR.send(null);
// };
//
// insertXml('toolbox.xml', 'xmlPlace1');
// insertXml('workspace.xml', 'xmlPlace2');



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
    startScale: 1.0,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2
  },
  trashcan: true
});

var onResize = function(e) {
  // console.log('ws-2', workspace);
  // Compute the absolute coordinates and dimensions of blocklyArea
  var element = blocklyArea;
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
  blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
  blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
  Blockly.svgResize(workspace);
};
window.addEventListener('resize', onResize, false);
window.addEventListener('resize', Blockly.svgResize(workspace), false);
//
// try {
//   window.addEventListener('resize', Blockly.svgResize(workspace), false);
// } catch(e) {
//   console.log('era----',e);
// }
// console.log('workspace',workspace);
// onResize();
// Blockly.svgResize(workspace);

// マルチワークスペース（マルチツールボックス？）何故かこれで実現できない。要調査。
// var blockFactoryArea = document.getElementById("blockFactoryArea");
// var blockFactoryDiv = document.getElementById("blockFactoryDiv");
// // console.log(blockFactoryDiv);
// var blockFactoryWorkspace = Blockly.inject(blockFactoryDiv, {
//   toolbox: document.getElementById('blockFactoryToolbox'),
//   grid: {
//     spacing: 20,
//     length: 3,
//     colour: '#ccc',
//     snap: true
//   },
//   media: 'media/',
//   zoom: {
//     controls: true,
//     startScale: 1.0,
//     maxScale: 3,
//     minScale: 0.3,
//     scaleSpeed: 1.2
//   },
//   trashcan: true
// });
//
// var onResizeBlockFactory = function(e) {
//   // Compute the absolute coordinates and dimensions of blocklyArea
//   var element = blockFactoryArea;
//   var x = 0;
//   var y = 0;
//
//   do {
//     x += element.offsetLeft;
//     y += element.offsetTop;
//     element = element.offsetParent;
//   } while (element);
//   //Position blocklyDiv over blocklyArea
//   blockFactoryDiv.style.left = x + 'px';
//   blockFactoryDiv.style.top = y + 'px';
//   blockFactoryDiv.style.width = blockFactoryArea.offsetWidth + 'px';
//   blockFactoryDiv.style.height = blockFactoryArea.offsetHeight + 'px';
//   Blockly.svgResize(blockFactoryWorkspace);
// };
// window.addEventListener('resize', onResizeBlockFactory, false);
// onResizeBlockFactory();
// Blockly.svgResize(blockFactoryWorkspace);

// スタートブロックに接続されていないブロックは無効化する
// メソッド化した方が良いかも？
// 変数はどっかと競合してないか？
var xml = '<xml><block type="start" deletable="false"></block></xml>';
Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace);
workspace.addChangeListener(Blockly.Events.disableOrphans);


function showCode() {
  // console.log('ws-3', workspace);
  var outputArea = document.getElementById("outputArea");
  var code = Blockly.IchigoJamBASIC.workspaceToCode(workspace);
  outputArea.innerHTML = code;
};
// workspaceのリスナーへ登録を忘れずに
workspace.addChangeListener(showCode);

function discard() {
  // workspaceから全てのブロックを削除
  workspace.clear();

  // スタートブロックだけ復活させる
  var xml = '<xml><block type="start" deletable="false"></block></xml>';
  Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace);
  workspace.addChangeListener(Blockly.Events.disableOrphans);
};

document.getElementById("discardYes").addEventListener("click", discard, false);

function setLineNumber() {
  var contents = document.getElementById("outputArea");
  var lineNum = 10;
  var code = contents.innerText;
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
  contents.innerText = code;
};

workspace.addChangeListener(setLineNumber);

// アラートを表示する
function showAlert(alertStatus, message) {
  alertDiv = document.getElementById("alert");
  // ↓気持ち悪いのでjQueryのattr使って書き直そうかな
  alertDiv.innerHTML = "<div class=\"alert alert-" + alertStatus + " alert-dismissible\" role=\"alert\"><button type=\"button\" class=\"close\" aria-label=\"閉じる\"><span id=\"removeAlert\" aria-hidden=\"true\">×</span></button>" + message + "</div>"; // 実行順序の関係でid="alert"のクリックイベントが先に発火してしまうため、あえてbootstrapのdata-dismiss属性は使用しない。
  onResize();
};

// アラートを閉じる処理（あえてbootstrapの機能は使用しない）
document.getElementById("alert").addEventListener("click", function(e) {
  if (e.target.id == "removeAlert") {
    alertDiv = document.getElementById("alert");
    alertDiv.innerHTML = ""; // アラートを閉じるボタンに使用するdata-dismiss属性の代わりの処理
    onResize();
  };
}, false);

// 作成したプログラムを保存する
function save() {
  var fileName = document.getElementById("fileName").value;
  var xml = Blockly.Xml.workspaceToDom(workspace);
  // console.log(xml);
  var xmlText = Blockly.Xml.domToPrettyText(xml);
  var blob = new Blob([xmlText], {
    type: 'text/xml'
  });
  // イベントトリガがbuttonタグなので、aタグを生成する。（download属性はaタグのみ）
  var a = document.createElement("a");
  a.href = window.URL.createObjectURL(blob);
  a.download = fileName + ".xml";
  a.click();
  window.URL.revokeObjectURL(a.href); // blobとobjectURLの関連を削除（メモリ解放）
  showAlert("success", "プログラム　<strong> " + fileName + "</strong>　を保存しました。（場所：ダウンロードフォルダ）");
};

document.getElementById("saveYes").addEventListener("click", save, false);

// 外部からプログラムを読み込む
function load() {
  var input = document.createElement("input");
  input.type = "file";
  input.id = "loadFile";
  input.accept = "text/xml";

  input.addEventListener("change", function(event) {
    var file = event.target.files[0]; // inputから取得したFileListオブジェクトから読み込んだFileオブジェクトを取得
    var reader = new FileReader(); // Fileオブジェクトの情報を読み込むためにFileReaderオブジェクトを生成する
    reader.readAsText(file); // FileReaderオブジェクトにFileオブジェクトのテキスト情報を読み込む
    reader.onload = function() {
      var xml = Blockly.Xml.textToDom(reader.result); // readAsTextで読み込んだ情報はreader.resultで取得できる
      workspace.clear();
      Blockly.Xml.domToWorkspace(xml, workspace);
    };
    // たまにファイル読み込みに失敗するが原因不明
    // reader.onerror = function() {
    //   console.log("readError")
    // };
    // reader.onabort = function() {
    //   console.log("readError")
    // };
  }, false);
  input.click();
};

document.getElementById("load").addEventListener("click", load, false);

function showPorts() {
  chrome.serial.getDevices(function(devices) {
    var port = document.getElementById("portSelecter");
    for (var i = 0; i < devices.length; i++) {
      var option = document.createElement("option");
      option.value = devices[i].path;
      option.text = devices[i].displayName ? devices[i].displayName : devices[i].path;
      port.appendChild(option);
    }
  });
};

window.addEventListener("load", showPorts, false);

function setStatus(status) {
  document.getElementById("status").innerText = status;
  document.getElementById("communicate").innerText = status == "接続中" ? " 切断" : " 接続";
};

function connect() {
  var ports = document.getElementById("portSelecter");
  var selectedPort = ports.options[ports.selectedIndex].value;
  var status = document.getElementById("status");
  chrome.serial.connect(selectedPort, {
    bitrate: 115200,
    receiveTimeout: 5000
  }, function(connectionInfo) {
    connectionId = connectionInfo.connectionId; // 通信に関わるあらゆる関数内で使用されるのでconnectionIdをグローバル変数へ格納
    if (connectionId == -1) {
      setStatus("エラー");
      return;
    }
    setStatus("接続中");
    status.style.color = "#0054ab";
  });
};

function disconnect() {
  var status = document.getElementById("status");
  chrome.serial.disconnect(connectionId, function(result) {
    setStatus("未接続");
    status.style.color = "#e73700";
  });
};

function communicate() {
  var buttonStatus = document.getElementById("communicate").innerHTML;
  var ports = document.getElementById("portSelecter");
  var selectedIndex = ports.selectedIndex;
  if (selectedIndex == -1) { // ポートセレクタに要素が無い時にports.options[ports.selectedIndex].valueの値を取得しようとするとエラーになるのでselectedIndexを使用する
    showAlert("warning", "接続先が見つかりません。");
    return;
  }
  if (buttonStatus == " 接続") {
    connect();
  }
  if (buttonStatus == " 切断") {
    disconnect();
  }
}

document.getElementById("communicate").addEventListener("click", communicate, false);

function sendCharacter(char) {
  if (connectionId == -1) return;
  var buffer = new ArrayBuffer(1); // １バイト分（8bit）のバッファを確保
  var view = new Uint8Array(buffer); // 確保したバッファに格納できる値は符号無し8bit整数に指定
  view[0] = char;
  chrome.serial.send(connectionId, buffer, function(sendInfo) { // arraybufferの内容をconnection先に送る（必要ない？）
    // chrome.serial.flush(connectionId, function(result){ //
    //   console.log("flush:"+ result)
    // });
  });
};

function sendToIchigoJam() {
  var code = document.getElementById("outputArea").innerText;
  var sliceCode = code.split("");
  sliceCode.splice(0, 0, 'N', 'E', 'W', '\n');
  var buffer = new ArrayBuffer(sliceCode.length);
  var view = new Uint8Array(buffer);
  var progressBar = document.getElementById("progressBar");
  var progressValue = 0;
  var viewLength = view.length;
  var count = 1;
  var closeButton = document.getElementById("closeProgressBar");

  if (connectionId == -1) {
    showAlert("warning", "パソコンとIchigoJamを接続して下さい。");
    setTimeout(function() {
      closeButton.click();
    }, 1000);
    return;
  }

  if (code == "") {
    showAlert("warning", "プログラムを初期化しました。")
    setTimeout(function() {
      closeButton.click();
    }, 1000);
    return;
  }

  for (var i = 0; i < sliceCode.length; i++) {
    // 半角カナ文字に対応するには8bitの文字にする必要がある。（charCodeAtは16bitになる？）
    // var encoder = new TextEncoder("utf-8");
    // view[i] = encoder.encode(sliceCode[i]);
    // console.log("view:" + view[i])
    view[i] = sliceCode[i].charCodeAt(0);
  }
  var intervalId = setInterval(function() {
    progressBar.style.width = progressValue + "%";
    progressValue = (count / viewLength) * 100;
    count++;
    sendCharacter(view[0]);
    // console.log(view)
    view = view.slice(1);
    if (view.length == 0) {
      setTimeout(function() {
        progressBar.style.width = progressValue + "%";
      }, 500);
      clearInterval(intervalId);
      setTimeout(function() {
        showAlert("success", "プログラムの送信が完了しました。")
        closeButton.click();
      }, 500);
    }
  }, 20);
};

document.getElementById("send").addEventListener("click", sendToIchigoJam, false);

function sendCommand(command) {
  var closeButton = document.getElementById("closeProgressBar");
  if (connectionId == -1) {
    showAlert("warning", "パソコンとIchigoJamを接続して下さい。");
    setTimeout(function() {
      closeButton.click();
    }, 1000);
    return;
  }
  var sliceCommand = command.split("");
  for (var i = 0; i < sliceCommand.length; i++) {
    sliceCommand[i] = sliceCommand[i].charCodeAt(0);
  }
  var intervalId = setInterval(function() {
    sendCharacter(sliceCommand[0]);
    sliceCommand = sliceCommand.slice(1);
    if (sliceCommand.length == 0) {
      clearInterval(intervalId);
    }
  }, 20);
};

document.getElementById("run").addEventListener("click", function(){sendCommand("RUN\n")}, false);

document.getElementById("esc").addEventListener("click", function(){sendCharacter(27)}, false);

document.getElementById("toggle").addEventListener("click", function() {
  setTimeout(onResize, 350);
}, false);

var toolboxNormal = "<category name=\"出力\" colour=\"180\">\
  <block type=\"led\">\</block>\
  <block type=\"print\">\
    <value name=\"arg\">\
      <block type=\"string\">\
        <field name=\"strings\">\HELLO</field>\
      </block>\
    </value>\
  </block>\
  <block type=\"beep\">\</block>\
  <block type=\"play\">\</block>\
  <block type=\"tempo\">\</block>\
  <block type=\"out\">\</block>\
  <block type=\"pwm\">\</block>\
</category>\
<category name=\"入力\" colour=\"210\">\
  <block type=\"input\">\</block>\
</category>\
<category name=\"繰り返し\" colour=\"45\">\
  <block type=\"for\">\</block>\
</category>\
<category name=\"条件分岐\" colour=\"0\">\
  <block type=\"if\">\</block>\
  <block type=\"if_else\">\</block>\
</category>\
<category name=\"計算\" colour=\"90\">\
  <block type=\"let\">\</block>\
  <block type=\"not\">\</block>\
  <block type=\"number\">\</block>\
  <block type=\"string\">\</block>\
  <block type=\"calculation\">\</block>\
  <block type=\"variable\">\</block>\
  <block type=\"continuity\">\</block>\
  <block type=\"label_arg\">\</block>\
</category>\
<category name=\"音符\" colour=\"260\">\
  <block type=\"note_c\">\</block>\
  <block type=\"note_d\">\</block>\
  <block type=\"note_e\">\</block>\
  <block type=\"note_f\">\</block>\
  <block type=\"note_g\">\</block>\
  <block type=\"note_a\">\</block>\
  <block type=\"note_b\">\</block>\
  <block type=\"note_r\">\</block>\
  <block type=\"note_length\">\</block>\
  <block type=\"semitone\">\</block>\
  <block type=\"note_tempo\">\</block>\
  <block type=\"note_length_init\">\</block>\
  <block type=\"octave\">\</block>\
  <block type=\"octave_updown\">\</block>\
  <block type=\"note_loop\">\</block>\
  <block type=\"note_end\">\</block>\
</category>\
<category name=\"関数\" colour=\"315\">\
  <block type=\"btn\">\</block>\
  <block type=\"rnd\">\</block>\
  <block type=\"tick\">\</block>\
  <block type=\"inkey\">\</block>\
  <block type=\"chr\">\</block>\
  <block type=\"asc\">\</block>\
  <block type=\"scr\">\</block>\
  <block type=\"in\">\</block>\
  <block type=\"ana\">\</block>\
</category>\
<category name=\"その他\" colour=\"65\">\
  <block type=\"wait\">\</block>\
  <block type=\"goto\">\</block>\
  <block type=\"label\">\</block>\
  <block type=\"end\">\</block>\
  <block type=\"cls\">\</block>\
  <block type=\"locate\">\</block>\
  <block type=\"clt\">\</block>\
  <block type=\"scroll\">\</block>\
</category>";

var toolboxEvaluation = "<category name=\"うごかす\" colour=\"180\">\
  <block type=\"led_on_kids\">\</block>\
  <block type=\"led_off_kids\">\</block>\
  <block type=\"out_led_on\">\</block>\
  <block type=\"out_led_off\">\</block>\
  <block type=\"play\">\
    <value name=\"note\">\
      <block type=\"note_c\">\
        <value name=\"nextNote\">\
          <block type=\"note_d\">\
            <value name=\"nextNote\">\
              <block type=\"note_e\">\</block>\
            </value>\
          </block>\
        </value>\
      </block>\
    </value>\
  </block>\
  <block type=\"play_tune\">\</block>\
  <block type=\"test\">\</block>\
  <block type=\"servo\">\</block>\
  <block type=\"wait_kids\">\
    <value name=\"second\">\
      <block type=\"number\">\
        <field name=\"num\">1</field>\
      </block>\
    </value>\
  </block>\
</category>\
<category name=\"くりかえす\" colour=\"65\">\
  <block type=\"loop_infinite\">\</block>\
  <block type=\"loop_number\">\
    <value name=\"number\">\
      <block type=\"number\">\
        <field name=\"num\">3</field>\
      </block>\
    </value>\
  </block>\
</category>\
<category name=\"もし～なら\" colour=\"0\">\
  <block type=\"if_kids\">\</block>\
  <block type=\"if_else_kids\">\</block>\
  <block type=\"btn_kids\">\</block>\
  <block type=\"ana_infrared_sensor\">\</block>\
  <block type=\"ana_light_sensor\">\</block>\
</category>\
<category name=\"音色\" colour=\"260\">\
  <block type=\"note_c\">\</block>\
  <block type=\"note_d\">\</block>\
  <block type=\"note_e\">\</block>\
  <block type=\"note_f\">\</block>\
  <block type=\"note_g\">\</block>\
  <block type=\"note_a\">\</block>\
  <block type=\"note_b\">\</block>\
  <block type=\"note_r_kids\">\</block>\
  <block type=\"note_length\">\</block>\
  <block type=\"semitone\">\</block>\
  <block type=\"note_tempo\">\</block>\
  <block type=\"note_length_init\">\</block>\
  <block type=\"octave\">\</block>\
  <block type=\"octave_updown\">\</block>\
  <block type=\"note_loop\">\</block>\
  <block type=\"note_end\">\</block>\
</category>";

// ツールボックスの中身をラジオボタンに応じて書き換える
function modeChange() {
  var normal = document.forms.modeSelecter.normal.checked;
  var evaluation = document.forms.modeSelecter.evaluation.checked;
  var toolbox = document.getElementById("toolbox");
  // ダブルクォーテーションの前と>の後にバックスラッシュを挿入
  if (normal) {
    toolbox.innerHTML = toolboxNormal;
  }
  if (evaluation) {
    toolbox.innerHTML = toolboxEvaluation;
  }
  workspace.updateToolbox(toolbox);
};
// document.getElementById("modeSelecter").addEventListener("click", modeChange, false);

// ツールボックスのフライアウトが開いた状態でモードを切り替えると、どこかクリックするまでフライアウトが残るのを防ぐ
function settingEvent() {
  var blocklyFlyout = document.getElementsByClassName("blocklyFlyout");
  blocklyFlyout[0].style.display = "none"; // blocklyFlyoutはオブジェクトなので０番目の要素を使用
};
document.getElementById("settings").addEventListener("click", settingEvent , false);

// 「ずっとくりかえす」ブロック用の処理 没？
// function loopInfiniteCount() {
//   loopInfiniteNum = 0;
// };
//
// workspace.addChangeListener(loopInfiniteCount);

function forVarCount() {
  forVar = "I";
};

workspace.addChangeListener(forVarCount);

// test
// function createPinLabel() {
//   var options = [];
//   for (var i = 1; i <= 3; i++) {
//     var pin = document.getElementById("pin-OUT" + i).value;
//     console.log("pin:" + i + ":" + pin)
//     // options[i] = [pin, String(i+1)];
//     options.push([pin, String(i)]);
//     console.log("options:",options)
//   }
//   return options;
// };

// function editPinLabel() {
//   // var dropdown = new Blockly.FieldDropdown(createPinLabel);
//   // // var dropdown = new Blockly.FieldDropdown([["うんこ","1"],["aaa", "2"], ["ハロー", "3"]]);
//   // console.log("cPL:" + createPinLabel())
//   // Blockly.Blocks['test'] = {
//   //   init: function() {
//   //     this.appendDummyInput()
//   //         .appendField(dropdown, "test");
//   //         // .appendField(new Blockly.FieldDropdown([["OUT1","1"], ["OUT2","2"], ["OUT3","3"]]), "test");
//   //     this.setPreviousStatement(true, null);
//   //     this.setNextStatement(true, null);
//   //     this.setColour(240);
//   //     this.setTooltip('');
//   //     this.setHelpUrl('');
//   //   }
//   // };
//   // var toolbox = document.getElementById("toolbox");
//   // workspace.toolbox_.refreshSelection();
//   // workspace.toolbox_.render;
//   var xml = Blockly.Xml.workspaceToDom(workspace);
//   workspace.clear();
//   Blockly.Xml.domToWorkspace(workspace, xml);
// }

// document.getElementById("pinLabelOk").addEventListener("click", editPinLabel, false);

function addToolbox() {
  var toolbox = document.getElementById("toolbox");
  // console.log(toolbox);
  var blocks = Blockly.Blocks;
  // console.log("blocks:",blocks);

  var category;
  var blockId;
  var blockDiv;
  for (var block in blocks) {
    blockCategory = blocks[block].category;
    // console.log('blockCategory',blockCategory);
    if (blockCategory == undefined) {
      blockDiv = document.createElement("block");
      blockDiv.setAttribute("type", block);
      // console.log(toolbox.children[blockId]);
      toolbox.children['category1'].appendChild(blockDiv);
      continue;
    }
    // console.log('hoge');
    if (blockCategory != "category0") {
      blockDiv = document.createElement("block");
      blockDiv.setAttribute("type", block);
      // console.log(toolbox.children[blockId]);
      toolbox.children[blockCategory].appendChild(blockDiv);
      // category = document.getElementById(blockId);
      // category.appendChild(blockDiv);
    }
    // console.log(category);
  }

  workspace.updateToolbox(toolbox);
}
// addToolbox();

// function showBlockList() {
//   var toolbox = document.getElementById("toolbox");
//   var blockList = document.getElementById("blockList");
//   var li;
//
//   for (var i = 0; i < toolbox.children.length; i++) {
//     li = document.createElement("li");
//     li.setAttribute("role", "presentation");
//     li.setAttribute("class", "dropdown-header");
//     li.setAttribute("id", "bl-" + toolbox.children[i].id);
//     li.innerHTML = toolbox.children[i].getAttribute("name");
//     // console.log(li);
//     blockList.appendChild(li)
//   }
//
//   var blocks = Blockly.Blocks;
//   var a;
//   var categoryLi;
//
//   for (var block in blocks) {
//     // console.log(block);
//     li = document.createElement("li");
//     li.setAttribute("role", "presentation");
//     a = document.createElement("a");
//     a.setAttribute("href", "#");
//     a.innerHTML = block;
//     li.appendChild(a);
//     console.log(blocks[block].category);
//     if (blocks[block].category != "category0") {
//       categoryLi = document.getElementById("bl-" + blocks[block].category);
//       categoryLi.parentNode.insertBefore(li, categoryLi.nextSibling);
//     }
//   }
// }
//
// function showBlockNameToDropdown() {
//
// }

// document.getElementById("blockListButton").addEventListener("click", showBlockNameToDropdown , false);

function showBlockList() {
  var toolbox = document.getElementById("toolbox");
  var blockList = document.getElementById("blockList");
  var option;

  // for (var i = 0; i < toolbox.children.length; i++) {
  //   option = document.createElement("option");
  //   option.setAttribute("role", "presentation");
  //   option.setAttribute("class", "dropdown-header");
  //   option.setAttribute("id", "bl-" + toolbox.children[i].id);
  //   option.innerHTML = toolbox.children[i].getAttribute("name");
  //   // console.log(option);
  //   blockList.appendChild(option)
  // }

  var blocks = Blockly.Blocks;
  var a;
  var categoryLi;

  for (var block in blocks) {
    // console.log(block);
    option = document.createElement("option");
    option.innerHTML = block;
    blockList.appendChild(option)
    // a = document.createElement("a");
    // a.setAttribute("href", "#");
    // a.innerHTML = block;
    // option.appendChild(a);
    // console.log(blocks[block].category);
    // if (blocks[block].category != "category0") {
    //   categoryLi = document.getElementById("bl-" + blocks[block].category);
    //   categoryLi.parentNode.insertBefore(option, categoryLi.nextSibling);
    // }
  }
}

// showBlockList();

// window.onload = function(){
//   addToolbox();
// }

// function addToolbox2() {
//   var toolbox = document.getElementById("toolbox");
//   console.log(toolbox);
//   var blocks = Blockly.Blocks;
//   // console.log("blocks:",blocks);
//
//   var category;
//   var blockDiv;
//   for (var block in blocks) {
//     blockDiv = document.createElement("block");
//     blockDiv.setAttribute("type", block)
//     toolbox.children.category1.appendChild(blockDiv);
//     // console.log(category);
//   }
//
//   workspace.updateToolbox(toolbox);
// }
//
// addToolbox2();

function errorHandler(e) {
  var msg = '';

  switch (e.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      msg = 'QUOTA_EXCEEDED_ERR';
      break;
    case FileError.NOT_FOUND_ERR:
      msg = 'NOT_FOUND_ERR';
      break;
    case FileError.SECURITY_ERR:
      msg = 'SECURITY_ERR';
      break;
    case FileError.INVALID_MODIFICATION_ERR:
      msg = 'INVALID_MODIFICATION_ERR';
      break;
    case FileError.INVALID_STATE_ERR:
      msg = 'INVALID_STATE_ERR';
      break;
    default:
      msg = 'Unknown Error';
      break;
  };

  // console.log('Error: ' + msg);
}

window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;

// function onInitFs(fs) {
//   fs.root.getFile('log.txt', {}, function(fileEntry) {
//     console.log(fileEntry);
//   }, errorHandler);
// }

// function onInitFs(fs) {
//   fs.root.getFile('..\fs-test01.txt', {create: true, exclusive: true}, function(fileEntry) {
//     // fileEntry.isFile === true
//     // fileEntry.name == 'log.txt'
//     // fileEntry.fullPath == '/log.txt'
//     console.log("ok");
//   }, errorHandler);
// }
//
// window.requestFileSystem(window.TEMPORARY, 1024*1024, onInitFs, errorHandler);

function createBlocksFile() {
  var fileName = "blocks";
  var text = "";
  var blocks = Blockly.Blocks;

  for (var block in blocks) {
    text += "Blockly.Blocks[\"" + block + "\"] = {\n" + "init: " + blocks[block].init + ",\n" + "\"category\": \"" + blocks[block].category + "\"\n};\n"
  }

  var blob = new Blob([text], {
    type: 'text/plain'
  });
  // イベントトリガがbuttonタグなので、aタグを生成する。（download属性はaタグのみ）
  var a = document.createElement("a");
  a.href = window.URL.createObjectURL(blob);
  a.download = fileName + ".js";
  a.click();
  window.URL.revokeObjectURL(a.href); // blobとobjectURLの関連を削除（メモリ解放）
  showAlert("success", "プログラム　<strong> " + fileName + "</strong>　を保存しました。（場所：ダウンロードフォルダ）");
};
// createBlocksFile();

function addNewBlock(blockName, categoryName, blockColor) {
  var blockName;

  Blockly.Blocks[blockName] = {
    init: function() {
      this.appendDummyInput()
          .appendField(blockName);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(blockColor);
    },
    "category": categoryName
  }
};

function codeToUnity() {
  var basicCode = document.getElementById("outputArea").innerText;

  var udpPort = new osc.UDPPort({
    // localAddress: "127.0.0.1",
    // localPort: 57121,
    // metadata: true
  });

  udpPort.on("error", function (error) {
    console.log("An error occurred: ", error);
  });
  //
  // udpPort.on("message", function(msg) {
  //   console.log('received osc:', msg);
  // });

  // Open the socket.
  udpPort.open();

  udpPort.on("ready", function () {
    udpPort.send({
      address: "/unity",
      args: [
        {
          type: "s",
          value: basicCode
        }
      ]
    }, "127.0.0.1", 6666);
    udpPort.close();
  });

  // おそらく非同期なので、ここでcloseしてもだめ
  // udpPort.close();
  // udpPort.close("127.0.0.1", 57121);
};
document.getElementById("simulate").addEventListener("click", codeToUnity, false);
