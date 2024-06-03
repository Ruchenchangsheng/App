export const loginUser = (userData) => {
  return {
    type: "LOGIN_USER",
    payload: userData,
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT_USER",
  };
};

export const createOrder = (orderData) => ({
  type: "CREATE_ORDER",
  payload: orderData,
});

export const getOrders = (orders) => {
  return {
    type: "GET_ORDERS",
    payload: orders,
  };
};
export const setOrderDetail = (orderDetail) => ({
  type: "SET_ORDER_DETAIL",
  payload: orderDetail,
});