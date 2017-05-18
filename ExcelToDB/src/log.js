
var logText = "";
function addLog(str) {
    logText += str +"\n";
}
function getLogText() {
    return logText
}
exports.addLog = addLog;
exports.getLogText = getLogText;


