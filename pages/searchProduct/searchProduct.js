// pages/searchProduct/searchProduct.js
Page({
  data: {
    classList:['全部','镜架','镜片','太阳眼镜','隐形眼镜','配件','其他','护理液'],
    productList: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',]
  },
  onLoad: function (options) {
  
  },
  onScanCode:function(){
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  }
})