function insertToolbox(fileName, place) {
    var XMLHR = new XMLHttpRequest();
    XMLHR.onreadystatechange = function() {
        if (XMLHR.readyState == 4 && XMLHR.status == 200) {
            var contents = XMLHR.responseXML;
            // console.log(contents.documentElement);
            var contentsText = new XMLSerializer().serializeToString(contents.documentElement)
            // ＸＭＬファイルではresponseTextではなくresponseXML
            contentsText = contentsText.slice(0, -6);
            contentsText += '<category name="くりかえす" colour="#a5935b">' +
                '<block type="loop_infinite"></block>' +
                '<block type="loop_number">' +
                  '<value name="number">' +
                    '<shadow type="数値">' +
                      '<field name="num"></field>' +
                    '</shadow>' +
                  '</value>' +
                '</block>' +
              '</category>' +
              '<category name="もし〜なら" colour="#a55b5b">' +
                '<block type="if_kids"></block>' +
                '<block type="if_else_kids"></block>' +
              '</category>';
            contentsText += '</xml>';
            // console.log(contentsText);
            document.getElementById(place).innerHTML = contentsText;
            // console.log('loadXML');
        }
    }
    XMLHR.open("GET", fileName, false);
    XMLHR.send(null);
};

insertToolbox('toolbox.xml', 'xmlPlace1');

// function insertXml(fileName, place) {
//     var XMLHR = new XMLHttpRequest();
//     XMLHR.onreadystatechange = function() {
//         if (XMLHR.readyState == 4 && XMLHR.status == 200) {
//             var contents = XMLHR.responseXML;
//             // console.log(contents.documentElement);
//             var contentsText = new XMLSerializer().serializeToString(contents.documentElement)
//             // ＸＭＬファイルではresponseTextではなくresponseXML
//             document.getElementById(place).innerHTML = contentsText;
//             // console.log('loadXML');
//         }
//     }
//     XMLHR.open("GET", fileName, false);
//     XMLHR.send(null);
// };
// insertXml('workspace.xml', 'xmlPlace2');
