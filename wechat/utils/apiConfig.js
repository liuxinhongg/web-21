// const apiConfig = 'http://localhost:3000';
const apiConfig = 'http://192.168.31.67:3000';
// JS
let ajax = {
  get(url,data,success){
    wx.request({
      url: apiConfig+url,
      data,
      method:'GET',
      success,
    })
  },
  promiseGet(url,data,success){
    return new Promise((resolve,reject)=>{
      wx.request({
        url: apiConfig+url,
        data,
        success:resolve,
        fail:reject
      })
    })
  }

}
export default ajax