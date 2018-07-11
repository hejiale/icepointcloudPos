// pages/orderList/orderList.js
Page({

  data: {
    orderList: ['', '', '', '', '', '', '', '', '']
  },

  onLoad: function (options) {
  
  },
  onOrderDetail:function(e){
    wx.navigateTo({
      url: '../orderDetail/orderDetail',
    })
  }
})