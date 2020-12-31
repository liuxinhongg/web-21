// pages/person/person.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let context = wx.createCanvasContext('canvas');
    // context.setStrokeStyle("red");
    context.setStrokeStyle('red')
    context.setLineWidth(5)
    // context.fillRect(20,20,150,75);
    // 头
    context.moveTo(160,100)
    context.arc(100,100,60,0,2*Math.PI,true);
    // 嘴
    context.moveTo(140,100);
    context.arc(100,100,40,0,Math.PI,false)
    // 眼睛
    context.moveTo(85,80);
    context.arc(80,80,5,0,2*Math.PI,false)
    context.moveTo(125,80);
    context.arc(120,80,5,0,2*Math.PI,false)

    context.stroke()
    context.draw()
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})