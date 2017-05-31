var path = require('path');
var fs = require('fs');

var log = require("./log");
require("./tool");
var wf = require("./write_file")
var parse = require("./parse");
var category = '';
var platform = '';
process.argv.forEach(function (val ,index ,array) {
    // 手动执行arg1 参数 分类
    if(index == 2){
        category=val
    }
    if(index == 3){ //平台
        platform=val
    }
})
if(category&&platform){
    main(category,platform)

}else {
    main()
}
function main(arg,arg1) {

// 加载文件
    var nowDate = new Date().Format("yyyy-MM-dd");
    var dirname = path.resolve(__dirname, '..') + "/excel/" + nowDate + ".xls";
    var logFileName = nowDate + ".parse.log";
    var filePath = "";
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
    var result = parse.parseExcel(filePath, arg,arg1);
    // wf.writeFile('../db/dailyGoods.' +nowDate +'.json',JSON.stringify(result));
    wf.writeFile('../log/' +logFileName, log.getLogText());
}

