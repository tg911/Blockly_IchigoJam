function insertXml(fileName, place) {
    var XMLHR = new XMLHttpRequest();
    XMLHR.onreadystatechange = function() {
        if (XMLHR.readyState == 4 && XMLHR.status == 200) {
            var contents = XMLHR.responseXML;
            // console.log(contents.documentElement);
            var contentsText = new XMLSerializer().serializeToString(contents.documentElement)
            // ＸＭＬファイルではresponseTextではなくresponseXML
            document.getElementById(place).innerHTML = contentsText;
            console.log('loadXML');
        }
    }
    XMLHR.open("GET", fileName, false);
    XMLHR.send(null);
};

insertXml('toolbox.xml', 'xmlPlace1');
insertXml('workspace.xml', 'xmlPlace2');
