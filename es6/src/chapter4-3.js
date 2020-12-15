{
    // map()数据映射
    let json = [
        { title: "es6", status: 1 },
        { title: "nodejs", status: 0 },
        { title: "wechat", status: 0 },
        { title: "vue", status: 1 },
    ];
    let video = json.map(function(item) {
        /* return {
        	title:item.title,
        	statusTxt:item.status ? "已上线":"未上线"
        } */
        /* item.status = item.status ? "已上线":"未上线";
        return item; */
        // Object.assign(obj,item)
        let obj = {};
        Object.assign(obj, item);
        obj.status = item.status ? "已上线" : "未上线";
        return obj;
    })
    console.log("json", json)
    console.log("video", video)
} {
    // reduce()
    // reduce(function(返回值,当前val,当前的index,[]/{}){},[]/{})
    const letterList = "xiaolingxiaolingxing";
    /* {
    	y:1,
    	a:2,
    	n:6
    } */
    let result = letterList.split('').reduce(function(acc, cur) {
        /* console.log(acc);
        console.log(cur); */
        acc[cur] ? acc[cur]++ : acc[cur] = 1
        return acc;
    }, {})
    console.log(result);
    // 展开多层数组
    const list = [1, ["2nd", 2, 3, ["3th", 4, 5]],
        ['2nd'], 6, 7
    ];
    const deeplist = function(list) {
        return list.reduce(function(acc, cur) {
            // acc:返回值,cur当前的val
            return acc.concat(Array.isArray(cur) ? deeplist(cur) : cur);
        }, [])
    }
    let flatlist = deeplist(list);
    console.log(flatlist)
}