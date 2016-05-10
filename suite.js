//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "all.js"


// 总经理
function test000All() {
    debug = true;
    var p1 = { "角色" : "总经理", "账套" : "autotest1" };
    //var ok = login("000","000000",p1);
    testGetQR();
    //logout();

//    testEditSalesBill3();
//    testSetTableCellACValue();
}
function testGetQR() {
    tapMenu("销售","销售开单");
    var tableView = getTableView(window, 0);
    var cells = tableView.cells();
    var data = [];
    for(var i in cells) {
        var cell = cells[i];
        var data1= {};
        if(isUIATableCell(cell)) {
            setDataBySplit(data1,cell.name());
            var texts = getStaticTexts(cell);
            for(var j in texts) {
                var text = texts[j];
                try {
                    var v1 = text.name();
                    setDataBySplit(data1,v1);
                }catch(e) {
                    break;
                }
            }
            debugObject(data1);
        }
        data.push(data1);
    }
    debugElementTree(window);
}
function setDataBySplit(data1,v1) {
    var a1 = v1.split(":");
    if(a1.length>1) {
        data1[a1[0]] = a1[1];
    } else {
        var regex = / +/;
        a1 = v1.split(regex); // 1或多个空格再分割一次
        if(a1.length>1) {
            data1[a1[0]] = a1[1];
        } else {
            data1[a1[0]] = a1[0];
        }
    }
    return data1;
}
function testEditSalesBill2() {
    var o =  {"客户" : "zhhz1", "店员" : "005", "备注" : "备注", 
            "现金" :0,"刷卡":[100,"交"],"汇款":[100,"银"],"代收":[100,"代"],
            "明细" : [ { "货品" : "9528", "折扣" : 0.9,"价格" :100, "数量" : 5,"备注" :"xx" } ,
                       { "货品" : "werrty", "价格" :200, "数量" : 10 } ]};
    editSalesBillNoColorSize(o);
/*    debugElementTree(window);
    var button1 = getButton(window, 0);
    var button2 = getButton(window, 1);
    logInfo("btn1v="+button1.isVisible()+" btn2v="+button2.isVisible());
    */
}
function testEditSalesBill3() {
//var o = {"特殊货品" : { "抹零" : 9, "打包费" : 10 } };
//editSalesBillSpecial(o);
tapNaviHasMore();
var tableView = getTableView(window, -1);
var tableCell = getTableCellByText(tableView, "核销");
tap(tableCell);
delay();
    debugElementTree(window);
}
function testSetTableCellACValue() {
    var f = new TField("客户", TC_AC, 1, "123",{"匹配":"张"}); // 
    setTableCellACValue(window, f);
    debugElementTree(window);
    var table2 = getTableView(window,0);
    var cells = table2.cells();
    for(var i in cells) {
    var cell = cells[i];
    logInfo(cell.name()+" "+cell.isVisible());
    }
}
function testEditSalesBill() {
//    debugElementTree(window);
    
//     tapAdd();
//    debugElementTree(app.mainWindow());
    return;
//    var table = getTableView(window, 0);
//    var group = getTableGroup(table, "商品明细");//"add mat"
//    var add = getButton(group, 0);
//    tap(add);
     var keys =["客户"];
    // ["客户","店员","备注","现金","刷卡","刷卡账户","汇款","汇款账户","汇款","汇款账户","代收","代收账户"];//"现金","刷卡",
     var fields = editSalesBillFields(keys);
    // // var f = new TField("客户", TF_AC, 1, "zhhz1");
    //
     setTFieldsValue(window, fields);
     debugElementTree(window);
//    table = getTableView(window, -1);
//    var value = "9528";
//    var searchBar = getSearchBar(table, 0);
//    setValue(searchBar, value);
//    var kb = app.keyboard();
//    tap(getButton(kb, "Search"));
    //debugElementTree(target);
    //var detWindow = app.mainWindow();
//    debugElementTree(detWindow);
//    var keys = ["折扣","价格","数量","备注"];
//    keys = ["折扣"];
//    var fields = editSalesBillDetailFields(keys);
//    delay(10);
//    setTFieldsValue(window, fields);
//    tapButton(window, "添加到商品明细");
//    tapButton(window, "down arrow");
    

    // 
    //    
    // var table = getTableView(window,0);
    // var customerCell = table.cells()[1];
    // var customerTF = getTextField(customerCell, 0);
    // tap(customerTF);
    // 客户列表
    // var table2 = getTableView(window,1);
    // var cell = table2.cells()[1];
    // tap(cell);
    // var text = getStaticText(cell, 0);
    // tap(text);
    // debugElementTree(target);
    // var searchBar = getSearchBar(table2, 0);
    // setValue(searchBar,"zhhz1");
    // delay();
    // var kb = app.keyboard();
    // tap(getButton(kb,"Search"));
    // delay();
    // search之后，已经不是原来的tableview
    // table2 = getTableView(window,0);
    //    
    // debugElementTree(target);

    // table2.scrollUp();
    //    

    // var cell = cells[6];
    // waitUntil(cell.isVisible(),30);
    // logInfo(cell.name()+" "+cell.isVisible());
    // debugElementTree(kb);
    // var cell = getTableCell(table2, "周恩来");
    // cell.tap();
    // getStaticText(cell,0);
    // tap(getStaticText(cell,0));
}