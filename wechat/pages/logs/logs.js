//logs.js

Page({
  data: {
    longitude:'',
    latitude:'',
    markers:[{
      id:1,
      latitude:'',
      longitude:'',
      iconPath:'../../image/person-archive.png',
      width:40,
      height:40
    }],
    logs: [],
    item: {
      index: 0,
      msg: '我是一个模板',
      time: '2016-09-15'
    }
  },
  onLoad: function (options) {
    console.log(options);
    let that = this;
    wx.getLocation({
      success(res){
        // console.log(this)
        console.log(res);
        that.setData({
          longitude:res.longitude,
          latitude:res.latitude,
          'markers[0].latitude':res.latitude,
          'markers[0].longitude':res.longitude,
        })
      }
    })
  }
})
