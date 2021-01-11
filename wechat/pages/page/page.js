const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x:0,
    y:0,
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
    },
    content:`<div> <h1>在富文本中显示</h1> </div>`
  },
  btnOne(e){
    console.log(e.detail.value);
  },
  jump(){
    // wx.navigateTo({
    //   url:"../index/index?name=wanggang"
    // })
    wx.switchTab({
      url:'../logs/logs'
    })
  },
  getdata(e){
    console.log(e)
    console.log(e.currentTarget.dataset.name)
    console.log(e.currentTarget.dataset.id)
  },
  btn(){
    // this.data.x = 30
    // this.data.y = 30;
    this.setData({
      x : 30,
      y : 30
    })
    console.log(this);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(app.globalData.username)
    wx.requestPayment({
      nonceStr: 'nonceStr',
      package: 'package',
      paySign: 'paySign',
      timeStamp: 'timeStamp',
    })
    wx.chooseAddress({
      success: (result) => {
        console.log(result)
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let aa = wx.createCanvasContext('aa');
    aa.setStrokeStyle('red')
    aa.setLineWidth(5)
    aa.moveTo(85,80);
    aa.arc(80,80,5,0,2*Math.PI,false)
    aa.stroke()
    aa.draw()
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