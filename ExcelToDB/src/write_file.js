
var fs = require('fs');
// todo 改写成当天日志追加的形式
//写文件
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, 'utf-8', complete);

    function complete(err) {
        if (err) throw err;
        console.log("日志生成成功 " + fileName);

    }
}
exports.writeFile = writeFile