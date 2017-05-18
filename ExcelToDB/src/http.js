var $ = require("jquery");
var wf = require("./write_file")
var sa = require("./SHA1");
var log = require("./log");
function post(requests) {
    var now = Date.now();
    var appKey = sa.SHA1("A6948762860633"+"UZ"+"0E8F8616-ADF0-B252-B274-9D2B018B6C18"+"UZ"+now)+"."+now
    $.ajax({
        "url": "https://d.apicloud.com/mcm/api/batch",
        "type": "POST",
        "cache": false,
        "headers": {
            "X-APICloud-AppId": "A6948762860633",
            "X-APICloud-AppKey":appKey
        },
        "data": {
            "requests": [ { method: 'POST',
                path: '/mcm/api/goods',
                body:
                { gId: '546729342103',
                    gName: 'NANASTORE春装2017新款女雪纺连衣裙蕾丝中长款吊带裙17C12现货',
                    gMainPic: 'http://img.alicdn.com/bao/uploaded/i3/11140421/TB2v0oGk98mpuFjSZFMXXaxpVXa_!!11140421.jpg',
                    gDetailUrl: 'http://item.taobao.com/item.htm?id=546729342103',
                    gShopName: 'NANASTORE',
                    gPrice: '338.00',
                    gSalesVolume: '239',
                    gCommissionPre: '5.00',
                    gCommission: '16.90',
                    gSaleWW: '浮力之舟',
                    gTKShortLink: 'https://s.click.taobao.com/d86x0mw',
                    gTKLink: 'https://s.click.taobao.com/t?e=m%3D2%26s%3DGU7ek3YlcLUcQipKwQzePOeEDrYVVa64LKpWJ%2Bin0XLjf2vlNIV67mHqaNW67m4eahEP0ZrOLIoDLrLEry%2BlE7I7jQ6ijBuUpLVKqSLVBkpw9bcVw3hpuUhgV6k57qFB6x%2Faj1GAisQ9xXGZngATP0iMZvNAigOxomfkDJRs%2BhU%3D&pvid=12_124.202.180.2_507_1494913028379',
                    gTKPassword: '￥6LT1HORVQj￥',
                    gTicketGross: '0',
                    gTicketRemain: '0',
                    gTicketValue: '无',
                    gTicketBeginTime: '',
                    gTicketEndTime: '',
                    gTicketUrl: '',
                    gTicketPassword: undefined,
                    gTicketShortLink: undefined,
                    isMarketing: '否' } },
                { method: 'POST',
                    path: '/mcm/api/goods',
                    body:
                    { gId: '545227270643',
                        gName: '尼班诗欧美2017夏装新款女装荷叶边上衣喇叭袖立领短袖t恤女宽松',
                        gMainPic: 'http://img.alicdn.com/bao/uploaded/i4/TB1kBU.PpXXXXchXFXXXXXXXXXX_!!0-item_pic.jpg',
                        gDetailUrl: 'http://item.taobao.com/item.htm?id=545227270643',
                        gShopName: '尼班诗官方旗舰店',
                        gPrice: '88.00',
                        gSalesVolume: '4390',
                        gCommissionPre: '30.50',
                        gCommission: '26.84',
                        gSaleWW: '尼班诗官方旗舰店',
                        gTKShortLink: 'https://s.click.taobao.com/Lo3x0mw',
                        gTKLink: 'https://s.click.taobao.com/t?e=m%3D2%26s%3DnbiR5%2BCu4IccQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67mHqaNW67m4eahEP0ZrOLIoDLrLEry%2BlE7I7jQ6ijBuUpLVKqSLVBkpw9bcVw3hpuSygBWYSaIOK43ZTvCW0QqrC1%2FO%2FLqz6dNbl6g293VvTxg5p7bh%2BFbQ%3D&pvid=12_124.202.180.2_507_1494913028379',
                        gTKPassword: '￥6UZiHORZwz￥',
                        gTicketGross: '10000',
                        gTicketRemain: '2570',
                        gTicketValue: '满6元减5元',
                        gTicketBeginTime: '2017-05-01',
                        gTicketEndTime: '2017-05-31',
                        gTicketUrl: 'https://uland.taobao.com/coupon/edetail?e=lr7jG%2FjUZB4N%2BoQUE6FNzE35t%2B5Fh%2FiCqWvg72rvapqpjSQ89xswGx6YE83bqVzeQzd8B0GE9pZnOc8KUO04lwPbfjxGQb3QoUC34ijeiBu8fgVSqLqGJ6%2By2hgOh2cKE4FV677cTcgIxjE3bVi1Ef9nzS%2FnyKkZ&pid=mm_19451295_23728391_79068903&af=1',
                        gTicketPassword: '￥HvEVHOReqx￥',
                        gTicketShortLink: 'https://s.click.taobao.com/Bzyw0mw',
                        isMarketing: '否' } },
                { method: 'POST',
                    path: '/mcm/api/goods',
                    body:
                    { gId: '548716642658',
                        gName: '徐琳mini蕾丝连衣裙女夏2017新款韩版宽松显瘦学生花瓣袖软妹裙子',
                        gMainPic: 'http://img.alicdn.com/bao/uploaded/i5/TB1mzyaQVXXXXbqXXXXYXGcGpXX_M2.SS2',
                        gDetailUrl: 'http://item.taobao.com/item.htm?id=548716642658',
                        gShopName: '徐琳mini',
                        gPrice: '268.00',
                        gSalesVolume: '224',
                        gCommissionPre: '7.00',
                        gCommission: '18.76',
                        gSaleWW: 'xulin891217',
                        gTKShortLink: 'https://s.click.taobao.com/Io3x0mw',
                        gTKLink: 'https://s.click.taobao.com/t?e=m%3D2%26s%3DOAAch%2B1d%2F80cQipKwQzePOeEDrYVVa64LKpWJ%2Bin0XLjf2vlNIV67mHqaNW67m4eahEP0ZrOLIoDLrLEry%2BlE7I7jQ6ijBuUpLVKqSLVBkou7RkQ57ydNakq5y6JCH7DTgEJzapBilq%2BH%2F8cejvfRx2DYrpNBz4fxiXvDf8DaRs%3D&pvid=12_124.202.180.2_507_1494913028379',
                        gTKPassword: '￥LEteHOR1VQ￥',
                        gTicketGross: '0',
                        gTicketRemain: '0',
                        gTicketValue: '无',
                        gTicketBeginTime: '',
                        gTicketEndTime: '',
                        gTicketUrl: '',
                        gTicketPassword: undefined,
                        gTicketShortLink: undefined,
                        isMarketing: '否' } } ]
        }
    }).done(function (data, status, header) {
        //success body
        console.log("数据导入成功")
        log.addLog("数据导入成功")
        log.addLog(data)
    }).fail(function (header, status, errorThrown) {
        log.addLog("数据导入失败")
        log.addLog(errorThrown)
        console.log("数据导入shibai")
    })
    wf.writeFile("http-"+new Date()+".log", log.getLogText());
}
post()

exports.post = post;