const initialState = {
  isLoggedIn: false,
  userName: null,
  token: null,
  orders: [],
  orderDetail: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        isLoggedIn: true,
        userName: action.payload.userName,
        token: action.payload.token,
      };
    case "LOGOUT_USER":
      return initialState;
    case "CREATE_ORDER":
      return state;
    case "GET_ORDERS":
      return {
        ...state,
        orders: action.payload,
      };
    case "SET_ORDER_DETAIL":
      return {
        ...state,
        orderDetail: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
