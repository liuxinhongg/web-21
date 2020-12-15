"use strict";

{
    // map()数据映射
    var json = [{ title: "es6", status: 1 }, { title: "nodejs", status: 0 }, { title: "wechat", status: 0 }, { title: "vue", status: 1 }];
    var video = json.map(function (item) {
        /* return {
        	title:item.title,
        	statusTxt:item.status ? "已上线":"未上线"
        } */
        /* item.status = item.status ? "已上线":"未上线";
        return item; */
        // Object.assign(obj,item)
        var obj = {};
        Object.assign(obj, item);
        obj.status = item.status ? "已上线" : "未上线";
        return obj;
    });
    console.log("json", json);
    console.log("video", video);
}{
    // reduce()
    // reduce(function(返回值,当前val,当前的index,[]/{}){},[]/{})
    var letterList = "xiaolingxiaolingxing";
    /* {
    	y:1,
    	a:2,
    	n:6
    } */
    var result = letterList.split('').reduce(function (acc, cur) {
        /* console.log(acc);
        console.log(cur); */
        acc[cur] ? acc[cur]++ : acc[cur] = 1;
        return acc;
    }, {});
    console.log(result);
    // 展开多层数组
    var list = [1, ["2nd", 2, 3, ["3th", 4, 5]], ['2nd'], 6, 7];
    var deeplist = function deeplist(list) {
        return list.reduce(function (acc, cur) {
            // acc:返回值,cur当前的val
            return acc.concat(Array.isArray(cur) ? deeplist(cur) : cur);
        }, []);
    };
    var flatlist = deeplist(list);
    console.log(flatlist);
}