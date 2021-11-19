import { SEARCH_DATA, TRADE_LIST_DATA } from "../actions/search/actionTypes";

const initialState = {
  searchData: "",
  tradelistData:[]
};

const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_DATA:
      return {
        ...state,
        searchData: payload,
      };
    case TRADE_LIST_DATA:
      return{
        ...state,
        tradelistData: payload
      }; 
    default:
      return state;
  }
};

export default searchReducer;
