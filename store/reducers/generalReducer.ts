import { SET_SEARCHBAR_WIDTH } from "../actions/search/general/actionTypes";

const initialState = {
  searchbarWidth: false,
};

const generalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCHBAR_WIDTH:
      return {
        ...state,
        searchbarWidth: payload,
      };
    default:
      return state;
  }
};

export default generalReducer;
