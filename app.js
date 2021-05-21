// Remember require lib fs
var fs = require('fs');

const app = async (input) => {
    let result = '';
    try {
        //  Read file
        var content = await fs.readFileSync(input, 'utf8');
        var lines = content.trim().split(/\r?\n/).map(function (line) {
            return line.trim();
        });
        var data = [...new Set(lines)].join('\n')
        // Write file
        var fileName = './output.txt';
        await fs.writeFileSync(fileName, data, 'utf8');
        // Get file content
        result = await fs.readFileSync(fileName, 'utf8')
    }
    catch (e) {
        console.log(e.message)
    }
    return result;
}

app('./input.txt').then((output) => {
    const expectOutput = `不負責任\n不接受\n不承擔\n請承擔\n請負\n請支付\nipad\n自費支付\n龍舌蘭\n伏特加\n電子香煙\n電子煙\n針筒\n貨幣\n金幣\n鈔票\n紙鈔\n郵票\n雷達掃描器\n交通信號控制裝置\n竊聽器/竊聽裝置\n禁輸品\n槍\n瓦斯\n警棍\n電擊\n催淚彈\n察制服\n警察徽章\n警徽\n彩券\n樂透\n抽獎券\n泳衣\n泳裝\n泳褲\n小可愛\n吊帶\n內搭\n背心\n塑身衣\n內褲\n四角褲\n三角褲\n內衣\n胸罩\n煙火\n爆竹\n門票\n藍芽\n充電器\n充電線\n充電插座\n電池\n行充\n電源\n太陽眼鏡\nbluetooth\n藥\n醫療器材\n毒品\n含有療效\n用於人體商品\n活體動物\n賭博器具\n仿冒品\n含導外競網資訊商品\n菸\n手指虎\n口袋彈弓\n牙籤弩\n軍警用品\n磁性黏土\n磁力黏土\n磁性怪獸黏土\n違反台灣法規商品\n侵權商品\n萬能開鎖器材\n開鎖工具\n磁卡拷貝機\netude house\n素描高手\n好飾成雙造型眉粉筆\n主管機關\nhsa個案取締來含商品\n偷拍攝影機\n保險套\n傳輸產品\n學步車\n指尖陀螺\ngps\n行車紀錄器\n電捲棒\n染髮劑\n火災警報器\n消防設備\n安全帽\n嬰兒\n電視盒\nusb\n充電頭\n電腦用隨身碟\n電視機\n擴大機\n冷氣機\n除濕機\n電動理療按摩器具\n兒童自行車\n兒童滑板車\n單獨販售鋰\n種子\n花瓣\n毛皮\n化石\n動植物標本裝飾品\n平衡車\n聲光滑板車\n電動滑板車\n仿真\n侵入性器材\n飛鏢\n涉及傷害人身安全武器\n狼牙棒型手電筒\n鋼鞭\n鐵鞭\n甩棍\n十字弓\n造型商品\n扁鉆\n可用於除蚤的商品\n豆乾\n花生\n肉乾\n堅果\n蜜餞\n年糕\n粥\n蓋飯\n米製產品\nmaeil\n海帶\n牛肉\n食用油\n芝麻油\n大豆油\n味精\n鹽巴\n傳統麵條\n酵母粉\n硬粒小麥\n醬油\n茶葉\n黃豆\n玉米\n美食\n伴手禮\n代買\n美妝保健\n嬰幼童與母親\n手機平板與周邊\n居家生活\n家電影音\n汽機車零件百貨\n戶外與運動用品\n蛋糕\n甜點\n小吃\n飲料\n沖泡品\n烘焙食材\n南北雜貨\n麵食\n營養品\n哺育用品\n筆記型電腦\nandroid\n空機\napple\n園藝植作\n耳機\n麥克風\n音響\n眼鏡\n汽車百貨\n機車百貨\n導航\n充電傳輸\n機車騎士用品\n其他廠牌手機\n拍照周邊\n相機\niphone\n兒童玩具\n外出用品\n腳踏車\n自行車\n大型家電\n平板電腦\n傳統糕餅點心\n布丁\n奶酪\n冰品\n冰淇淋\n麵包\n吐司\n滷味\n料理包\n調理包\n火鍋湯底\n其他熟食\n特產\n丸餃\n湯圓\n港點\n海鮮\n肉品\n肉製品\n鮮果\n蔬菜\n起司\n乳製品\n茶包\n鮮奶\n果汁\n果醋\n咖啡\n黑糖\n蜂蜜\n麥片\n飲用水\n氣泡水\n甜品\n果乾\n肉鬆\n海味\n餅乾\n洋芋片\n爆米花\n罐頭\n醃漬品\n果醬\n抹醬\n烘焙材料粉\n豆類\n五穀雜糧\n脫水乾貨\n醬料\n調味料\n其他米\n食用米\n拌麵\n快煮麵\n義大利麵\n潔牙骨\n化毛膏\n泡麵\n零食\n零嘴\n營養補充品\n維他命\n食品\n奶粉\n飲品\nasus\nacer\ndell\nlenovo\nmsi\nmicrosoft\nsamsung\nhtc\nsony\n小米\noppo\n華為\nsharp\nsugar\n美圖\ngoogle\n福利\n二手機\n花苗\n無線\n滑鼠\n鍵盤\n藍牙\n喇叭\n車用\n通訊設備\n自拍棒\n空拍機\n充電盤\n汽車安全座椅\n手推車\n行動充電殼\n冰箱\n酒\n穀物\n巧克力\n稻米\n硬幣\n糖果`
    console.log(expectOutput == output)
})
