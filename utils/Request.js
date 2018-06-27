var HostURL = 'https://dev.icepointcloud.com';

//登录
function login(userName, password, deviceType, callBack) {
  let options = {
    account: userName,
    password: password,
    deviceType: deviceType,
    isPadLogin: false
  };

  http(requestHeader('bizadmin.login', options)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//注销
function loginOut(callBack) {
  http(requestHeader('bizadmin.logout', null)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//修改密码
function updatePassword(oldPassword, newPassword, callBack) {
  let options = {
    oldPassword: oldPassword,
    password: newPassword
  };

  http(requestHeader('bizadmin.updateUserPassword', options)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//查询仓库列表
function getWareHouseList(callBack) {
  let options = {
    isRepository: true
  };

  http(requestHeader('bizadmin.listStoreOrRepositoryByCompanyId', options)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//查询门店列表
function getAllStoreList(companyId, callBack) {
  let options = {
    isRepository: false,
    companyId: companyId
  };

  http(requestHeader('bizadmin.listStoreOrRepositoryByCompanyId', options)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//获取默认门店员工
function getCurrentEmployee(callBack) {
  http(requestHeader('employeeadmin.getEmployeeObjectFromAccount', null)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//查询商品
function queryGlassesList(storeId, page, keyword, classType, productCode, callBack) {
  let options = {
    orderType: 'FOR_SALES',
    storeId: storeId,
    pageSize: 50,
    pageIndex: page,
    nameKeyword: keyword,
    productType: classType,
    brandKeyword: '',
    supplierToCompany: '',
    prodCode: productCode
  };

  http(requestHeader('productAdmin.searchProduct', options)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//查询订单列表
function queryOrderList(callBack) {
  let options = {
    
  };

  http(requestHeader('productAdmin.searchProduct', options)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

    })
}





//请求头
function requestHeader(method, parameters) {
  var date = String(new Date().getTime()).substr(0, 10);
  var query = {
    jsonrpc: "2.0",
    method: method,
    id: date
  };

  if (parameters != null) {
    if (isArrayFn(parameters)) {
      query.params = parameters;
    } else {
      query.params = [parameters];
    }
  } else {
    query.params = [];
  }

  return query;
}

//后台请求
function http(parameter) {
  var header = {
    'content-type': 'application/x-www-form-urlencoded'
  };

  return new Promise((resolve, reject) => {
    wx.request({
      url: HostURL + "/gateway/api/jsonrpc.jsp",
      data: {
        query: JSON.stringify(parameter)
      },
      header: header,
      method: "POST",
      success: function(res) {
        resolve(res.data);
        console.log(res);
      },
      fail: function(res) {
        reject(res);
      }
    })
  })
}

//判断是否数组类型
function isArrayFn(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

module.exports = {
  login: login,
  loginOut: loginOut,
  updatePassword: updatePassword,
  getWareHouseList: getWareHouseList,
  getAllStoreList: getAllStoreList,
  getCurrentEmployee: getCurrentEmployee,
  queryGlassesList: queryGlassesList
}