// reducers/queryReducer.js
const initialState = {
    startDate: "",
    endDate: "",
    address: "",
    numOfGuests: "",
  };
  
  const queryReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_QUERY_DATA":
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };
  
  export default queryReducer;
  