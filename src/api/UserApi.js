//UserApi.js
export function registerUserApi(userData) {
    return request({
      url: '/user/register',
      method: 'POST',
      data: userData,
    });
  }

  export function loginUserApi(userData){
    return request({
        url: '/user/login',
        method: 'POST',
        data: userData,
      });
  }

  export function logoutUserApi() {
    return request({
      url: '/user/logout',
      method: 'GET',
    });
  }

  // export function createOrderApi(orderData,config) {
  //   return request({
  //     url: '/order/create',
  //     method: 'POST',
  //     data: orderData,
  //     headers: {
  //       'Authorization': config.headers.Authorization,
  //     },
  //   });
  // }

  export function createOrderApi(orderData) {
    return request({
      url: '/room/order/booking',
      method: 'POST',
      data: orderData,
    });
  }


  export function getOrderListApi(uid){
    return request({
      url: `/user/checkorder/${uid}`,
      method: 'GET',
      // headers: {
      //   'Authorization': config.headers.Authorization,
      // },
    });
  }

  export function getOrderDetailApi(orderId){
    return request({
      url: `/user/getOrder/detail/${orderId}`,
      method: 'GET'
    });
  }

  