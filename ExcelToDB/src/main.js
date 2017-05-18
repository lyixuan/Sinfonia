var path = require('path');
var fs = require('fs');

var log = require("./log");
require("./tool");
var wf = require("./write_file")
var parse = require("./parse");

function main(arg) {

// 加载文件
    var nowDate = arg ? arg : new Date().Format("yyyy-MM-dd");
    var dirname = path.resolve(__dirname, '..') + "/excel/精选优质商品清单(内含优惠券)-" + nowDate + ".xls";
    var logFileName = nowDate + ".parse.log";
    var filePath = ""
    try {
        filePath = fs.readFileSync(dirname);
    } catch (e) {
        log.addLog("找不到文件!")
        console.log("找不到文件!")
        log.addLog(e)
        wf.writeFile('../log/' +logFileName, log.getLogText());
        return
    }
// 解析文件
    var result = parse.parseExcel(filePath, '/mcm/api/goods');
    // wf.writeFile('../db/dailyGoods.' +nowDate +'.json',JSON.stringify(result));
    wf.writeFile('../log/' +logFileName, log.getLogText());
}
main()
exports.main = main;