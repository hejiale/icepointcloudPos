// pages/optometryList/optometryList.js
Page({
  data: {
    optometryList:['','',''],
    optometryTypes: ['球镜/SPH', '柱镜/CYL', '轴位/AXIS', '下加光/ADD', '矫正视力/ADD', '瞳高', '棱角', '基底','原镜瞳距/PD']
  },
  onLoad: function (options) {
  
  },
  onInsertOptometry:function(){
    wx.navigateTo({
      url: '../insertOptometry/insertOptometry',
    })
  }
})