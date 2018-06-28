var request = require('../utils/Request.js')

//用户登录
function userLogin(userName, password, cb) {
  //获取设备型号
  wx.getSystemInfo({
    success: function(res) {
      //登录
      request.login(userName, password, res.platform, function(data, error) {
        if (data) {
          getStoreEmployee(function (data) {

          
          });
        } else {
          wx.showToast({
            title: '登录失败!',
            icon: 'none'
          })
        }
      });
    }
  })
}

//获取门店信息 操作员工
function getStoreEmployee(cb) {
  request.getCurrentEmployee(function(data) {
    
    typeof cb == "function" && cb();
  });
}




var ConfigData = {
  storeResult: null,
  storeEmployee: null
}

module.exports = {
  userLogin: userLogin,
  ConfigData
}