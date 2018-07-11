// pages/home/home.js
var LoginManager = require('../../utils/LoginManager.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  onLogin:function(){
    // wx.navigateTo({
    //   url: '../payOrderPage/payOrderPage',
    // })
    // LoginManager.userLogin('boya@lingshou.com','123456',function (e) {
      
    // })
    wx.navigateTo({
      url: '../orderList/orderList',
    })
  }
})