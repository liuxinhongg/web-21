// pages/sort/sort.js
import $$ from "../../utils/apiConfig"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftList:[],
    rightList:[],
    name:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
   
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    this.setData({
      name:options.info
    })
    console.log(options)
    this.getdata();
    this.sortdata(options.info);
   
    if(this.data.leftList && this.data.rightList){
      console.log(2)
        wx.hideToast()
    }else{
      console.log(1)
      wx.showToast({
        title: '加载中...',
        icon: 'loading',
        duration: 5000
      })
    }
  },
  choose(e){
    this.setData({
      name:e.currentTarget.dataset.name
    })
    if(e.currentTarget.dataset.name){
      this.sortdata(e.currentTarget.dataset.name)
    }
  },
  sortdata(val){
    $$.promiseGet("/goods/sortHas",{sousuo:val}).then(res=>{
      console.log(res);
      setTimeout(()=>{
         this.setData({
          rightList:res.data.data
        })
      },2000)
     
    })
  },
  getdata(){
    $$.promiseGet("/goods/sortOne",{}).then(res=>{
      console.log(res);
      this.setData({
        leftList:res.data.data
      })
    })
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