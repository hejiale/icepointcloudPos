// pages/payOrderPage/payOrderPage.js
Page({
  data: {
    productList:["",""]
  },

  onLoad: function (options) {
  
  },
  onInsertProduct:function(){
    wx.navigateTo({
      url: '../searchProduct/searchProduct',
    })
  },
  onShowOptometryList:function(){

  }
})