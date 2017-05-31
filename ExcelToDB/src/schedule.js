/**
 * 执行方式
 * node parseExcel.js  arg1
 * arg1:2017-05-13  最后一次正确解析的日期,下次解析将从这个日期后开始
 * */


// var schedule = require('node-schedule');
// require("./tool");
// var m = require("./main.js");
//
// var Flag = "";
//
// process.argv.forEach(function (val ,index ,array) {
//     // 手动执行arg1日期
//     if(index == 2){
//         scheduleCronstyle(val)
//     }
// })
// function scheduleCronstyle(val){
//     if(val){
//         m.main(val)
//         Flag = val
//     } else {
//         schedule.scheduleJob('10 * * * * *', function(){
//             console.log('\n定时任务:' + new Date().Format("yyyy-MM-dd  hh:mm:ss.S"));
//             var nowDate = new Date().Format("yyyy-MM-dd");
//             if(!Flag || Flag < nowDate){
//                 m.main()
//                 Flag = nowDate
//             } else {
//                 console.log("今日已解析")
//             }
//         });
//     }
// }
//
// scheduleCronstyle();
