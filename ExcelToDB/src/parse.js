
var xlsx = require("node-xlsx");
var log = require("./log.js");
require("./tool.js");
var fs = require('fs');
var requestsArray = [];

//解析Excel
function parseExcel(filePath, ajaxPath) {
    var list = xlsx.parse(filePath)[0]; // list=[ { name: 'Page1', data: [ [Object], [Object], [Object] ] } ]
    var nowDate = new Date().Format("yyyy-MM-dd");
    var bTime = new Date().Format("yyyy-MM-dd hh:mm:ss.S")
    console.log("==== " + bTime + " :: parseExcel: Begin  ====");
    log.addLog("开始解析:" + bTime)

    if (list.data) {
        var excelData = list.data;
        var keyArray = excelData[1];
    } else {
        log.addLog("解析失败:excel结构异常")
        log.addLog("解析内容:" + list)
    }
    log.addLog("解析行数:" + (excelData.length >= 2 ? (excelData.length - 2) : 0))
    // 遍历正式数据
    for (var j = 2; j < excelData.length; j++) {
        var curData = excelData[j];
        if (curData.length == 0) continue;
        // var item = changeObjAjax(curData, keyArray, ajaxPath);
        // requestsArray.push(item);
        var item = changeObjJson(curData, keyArray ,bTime);
        fs.appendFile('../db/dailyGoods.' +nowDate +'.json', JSON.stringify(item), function (err) {
            if (err) {throw err}else{
            }
        });
    }

    var eTime = new Date().Format("yyyy-MM-dd hh:mm:ss.S")
    log.addLog("解析结束:" + eTime)

    console.log("==== " + eTime + " :: parseExcel: Finish  ====");
    return requestsArray;
}

// 转换数据格式(ajax)
function changeObjAjax(curData, keyArray, path) {
    var body = {}
    for (var c = 0; c < curData.length; c++) {
        body[keyArray[c]] = curData[c];
    }
    var obj = {
        "method": "POST",
        "path": path,
        "body": body
    };
    return obj;
}

// 转换数据格式(json)
function changeObjJson(curData, keyArray,time) {
    var obj = {createdAt:time}
    for (var c = 0; c < curData.length; c++) {
        obj[keyArray[c]] = curData[c];
    }
    return obj;
}

exports.parseExcel = parseExcel;
