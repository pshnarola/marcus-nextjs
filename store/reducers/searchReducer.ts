import { SEARCH_DATA } from "../actions/search/actionTypes";

const initialState = {
  searchData: "",
};

const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_DATA:
      return {
        ...state,
        searchData: payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
