const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    age:19,
    num:100,
    msg:"今天周二，下雪啦，降温了",
    seen:false,
    pome:[
      { title:"床前明月光",id:1 },
      { title:"疑是地上霜",id:2 },
      { title:"举头望明月",id:3 },
      { title:"低头思故乡",id:4 }
    ],
    Poetry:[
      { name:"煮豆燃豆萁" },
      { name:"豆在釜中泣" },
      { name:"本是同根生" },
      { name:"相煎何太急" }
    ],
    item: {
      index: 0,
      msg: '我是一个模板',
      time: '2016-09-15'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(app.globalData.username)
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("下拉~")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("触底")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("分享")
  }
})