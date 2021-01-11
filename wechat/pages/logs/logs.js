//logs.js
const app = getApp()
import $$ from "../../utils/apiConfig"
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
    },
    bannerlist:[],
    cartdata:[]
  },
  add(){
    let datalist = this.data.cartdata || [];
    let obj = {
      name:'zhangsan',
      num:1,
      status:false,
      number:11
    }
    datalist.push(obj)
    wx.setStorage({
      data: datalist,
      key: 'cart',
    })
  },
  onLoad: function (options) {
    wx.getStorage({
      key: 'cart',
      success:res=>{
        console.log(res)
        this.setData({
          cartdata:res.data
        })
      }
    })
    wx.setTabBarBadge({
      index: 1,
      text: '111'
    })
    /*
    wx.setTabBarStyle({
      color: '#FF0000',
      selectedColor: '#00FF00',
      backgroundColor: '#f99',
      borderStyle: 'white'
    })*/



    wx.getStorage({
      key: 'info',
      success:(res)=>{
        console.log(res.data);
      }
    })
    console.log(app.globalData.name)
    wx.request({
      url: 'http://192.168.31.67:3000/goods/bannerOne',
      method:'GET',
      success:res=>{
        console.log(res);
        this.setData({
          bannerlist:res.data.data
        })
      }
    })
    $$.promiseGet("/goods/bannerOne",{}).then(res=>{
      console.log(res)
    })
    // console.log(options);
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
