var HostURL = 'https://dev.icepointcloud.com';
var Redirect = 'https://dev.icepointcloud.com/dashboard.jsp';

//登录
function login(userName, password, deviceType, callBack) {
  let options = {
    account:  userName,
    password: password,
    redirect: Redirect
  };

  apiHttp(options, '/api/user/login').then(
    data => {
      typeof callBack == "function" && callBack(data, null)
    }).catch(e => {
    typeof callBack == "function" && callBack(null, e)
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

//查询积分规则
function queryIntegralRule(callBack) {
  http(requestHeader('integralTradeAdmin.getIntegralTradeObjectForCompany', null)).then(
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

//查询员工列表
function queryEmployeeList(keyword, storeId, page, callBack) {
  let options = {
    pageNo: page,
    maxPageSize: 20,
    keyWord: keyword,
    isOnJob: true,
    storeId: storeId
  };

  http(requestHeader('employeeadmin.listEmployee', options)).then(
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

//根据扫码的code查询商品
function searchProductWithScanCode(scanCode, storeId, callBack) {
  let options = {
    orderType: 'FOR_SALES',
    storeId: storeId,
    isNeedPhoto: true,
    prodCode: scanCode
  };

  http(requestHeader('productAdmin.searchProduct', options)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//获取商品编码位数
function getProductConfig(callBack) {
  http(requestHeader('productConfigAdmin.getProductConfig', null)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//查询价格策略 
function queryPriceStrategy(callBack) {
  http(requestHeader('productAdmin.listPriceStrategyForListProduct', null)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//获取支付方式
function queryPayTypes(callBack) {
  http(requestHeader('payTypeConfigAdmin.listPayType', null)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//获取公司配置
function queryCompanyConfig(callBack) {
  http(requestHeader('companyAdmin.getCompanyConfig', null)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//判断验证会员设置
function queryValityMemberConfig(callBack) {
  http(requestHeader('bizadmin.getAuths', null)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//查询批量镜片光度
function queryBatchLensInventory(lensId, callBack) {
  http(requestHeader('batchAdmin.getBatchLenInventory', lensId)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//查询批量老花眼镜光度
function queryBatchReadingLensInventory(lensId, callBack) {
  http(requestHeader('batchAdmin.getBatchReadingGlassesInventory', lensId)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//查询批量隐形眼镜光度
function queryBatchContactLensInventory(lensId, callBack) {
  http(requestHeader('batchAdmin.getBatchContactLensInventoryDetailsByContactLensIds', lensId)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//查询镜片批量参数规格
function queryBatchContactLensSpecification(lensIds, callBack) {
  http(requestHeader('batchAdmin.getBatchContactLensInventory', lensIds.join(','))).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//查询光度范围
function queryBatchLensConfig(glassType, callBack) {
  http(requestHeader('sphCylCfgAdmin.getAllConfig', null)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//查询批量光度价格
function queryBatchLensPriceWithProductId(productId, glassType, sph, cyl, callBack) {
  let options = {
    req: {
      prodId: productId,
      type: glassType,
      isBatch: true,
      opticsBeans: [{
        sph: sph,
        cyl: cyl
      }]
    }
  };

  http(requestHeader('productConfigAdmin.listOptics', options)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//查询验光单列表
function queryOptometryList(customerId, callBack) {
  let options = {
    customerId: customerId
  };

  http(requestHeader('customerAdmin.listOptometry', options)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//保存验光单数据
function saveOptometry(options, callBack) {
  http(requestHeader('customerAdmin.saveOptometry', options)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//保存客户信息
function saveCustomer(options, callBack) {
  http(requestHeader('customerAdmin.saveCustomerInfo', options)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//查询客户详细信息
function queryCustomerDetail(customerId, callBack) {
  let options = {
    customerId: customerId,
    needMoreInfo: true
  };

  http(requestHeader('customerAdmin.getCustomerInfo', options)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//查询客户列表
function queryCustomerList(page, keyword, callBack) {
  let options = {
    pageNo: page,
    keyword: keyword,
    maxPageSize: 30
  };

  http(requestHeader('customerAdmin.listCustomer', options)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//查询会员列表
function queryMemberList(page, keyword, phone, callBack) {
  let options = {
    pageNo: page,
    memberPhone: phone,
    maxPageSize: 30
  };

  http(requestHeader('customerAdmin.listCustomerMemberAccount', options)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//设置默认验光单
function setDefaultOptometry(customerId, defaultOptometryId, callBack) {
  let options = {
    customerId: customerId,
    id: defaultOptometryId
  };

  http(requestHeader('customerAdmin.setCurrentOptometry', options)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//获取客户会员等级
function getMemberLevelList(callBack) {
  http(requestHeader('customerConfigAdmin.listMemberLevel', null)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//获取客户类型
function getCustomerTypeList(callBack) {
  http(requestHeader('customerConfigAdmin.listCustomerType', null)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//升级会员
function upgradeMember(customerId, growth, phone, integral, balance, callBack) {
  let options = {
    id: customerId,
    membergrowth: growth,
    memberPhone: phone,
    integral: integral,
    balance: balance
  };

  http(requestHeader('customerAdmin.customerUpdateToMember', options)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//验证会员
function validateMember(code, callBack) {
  let options = {
    keyword: code
  };

  http(requestHeader('customerAdmin.validateCustomerQRcode', options)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//修改会员手机号
function updateMemberPhone(customerId, phone, callBack) {
  let options = {
    id: customerId,
    memberPhone: phone
  };

  http(requestHeader('customerAdmin.updateCustomerMemberPhone', options)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//绑定会员
function bindMember(customerId, memberCustomerId, callBack) {
  let options = {
    id: customerId,
    memberCustomerId: memberCustomerId
  };

  http(requestHeader('customerAdmin.customerUpdateToMember', options)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//查询会员绑定客户信息
function queryMemberBindCustomer(memberCustomerId, callBack) {
  let options = {
    memberCustomerId: memberCustomerId
  };

  http(requestHeader('customerAdmin.listCustomerProfilesForCustomerMember', options)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//获取游客信息
function queryVisitor(callBack) {
  http(requestHeader('customerAdmin.listCustomerProfilesForCustomerMember', null)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//提交订单
function payOrder(options, callBack) {
  http(requestHeader('orderObjectAdmin.updateOrderForStatus', options)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//查询订单详情
function queryOrderDetail(orderNum, callBack) {
  let options = {
    orderNumber: orderNum
  };

  http(requestHeader('bizadmin.getSalesOrderByOrderNumberForPos', options)).then(
    data => {
      typeof callBack == "function" && callBack(data)
    }).catch(e => {

  })
}

//查询订单列表
function queryOrderList(orderCode, customerId, page, callBack) {
  let options = {
    pageNo: page,
    pageLimit: 30,
    orderObjectType: 'FOR_SALES',
    filterCols: [{
      colName: 'orderNumber',
      dataType: 'STRING',
      opType: 'LIKE',
      values: orderCode
    }, {
      colName: 'customerName',
      dataType: 'LONG',
      opType: 'EQ',
      values: customerId
    }]
  };

  http(requestHeader('bizadmin.listOrderByType', options)).then(
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
    if ("Array" === parameters.constructor) {
      query.params = parameters;
    } else {
      query.params = [parameters];
    }
  } else {
    query.params = [];
  }

  return query;
}

//jsonrpc后台请求
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
        console.log(res);
        //解析返回参数
        if (res.data != null) {
          if ("Array" === res.data.constructor || "String" === res.data.constructor) {
            resolve(res.data);
          } else if ("object" === typeof res.data) {
            if (res.data.result != null) {
              resolve(res.data.result);
            } else if (res.data.error != null) {
              reject(res);
            }
          }
        }
      },
      fail: function(res) {
        reject(res);
      }
    })
  })
}

//api后台请求
function apiHttp(parameter, method) {
  var header = {
    'content-type': 'application/x-www-form-urlencoded'
  };

  return new Promise((resolve, reject) => {
    wx.request({
      url: HostURL + method,
      data: parameter,
      method: "POST",
      header: header,
      success: function (res) {
        console.log(res);
        // //解析返回参数
        // if (res.data != null) {
        //   if ("Array" === res.data.constructor || "String" === res.data.constructor) {
        //     resolve(res.data);
        //   } else if ("object" === typeof res.data) {
        //     if (res.data.result != null) {
        //       resolve(res.data.result);
        //     } else if (res.data.error != null) {
        //       reject(res);
        //     }
        //   }
        // }
      },
      fail: function (res) {
        reject(res);
      }
    })
  })
}

module.exports = {
  login: login,
  loginOut: loginOut,
  updatePassword: updatePassword,
  getWareHouseList: getWareHouseList,
  getAllStoreList: getAllStoreList,
  getCurrentEmployee: getCurrentEmployee,
  queryGlassesList: queryGlassesList,
  queryOrderList: queryOrderList,
  queryPriceStrategy: queryPriceStrategy,
  searchProductWithScanCode: searchProductWithScanCode,
  queryBatchLensInventory: queryBatchLensInventory,
  queryBatchReadingLensInventory: queryBatchReadingLensInventory,
  queryBatchContactLensInventory: queryBatchContactLensInventory,
  queryBatchLensConfig: queryBatchLensConfig,
  queryBatchLensPriceWithProductId: queryBatchLensPriceWithProductId,
  queryOptometryList: queryOptometryList,
  saveOptometry: saveOptometry,
  saveCustomer: saveCustomer,
  queryOrderDetail: queryOrderDetail,
  queryCustomerDetail: queryCustomerDetail,
  setDefaultOptometry: setDefaultOptometry,
  getMemberLevelList: getMemberLevelList,
  getCustomerTypeList: getCustomerTypeList,
  upgradeMember: upgradeMember,
  validateMember: validateMember,
  updateMemberPhone: updateMemberPhone,
  queryMemberList: queryMemberList,
  bindMember: bindMember,
  queryMemberBindCustomer: queryMemberBindCustomer,
  queryVisitor: queryVisitor,
  getProductConfig: getProductConfig,
  payOrder: payOrder,
  queryEmployeeList: queryEmployeeList,
  queryIntegralRule: queryIntegralRule,
  queryPayTypes: queryPayTypes,
  queryCompanyConfig: queryCompanyConfig,
  queryValityMemberConfig: queryValityMemberConfig
}