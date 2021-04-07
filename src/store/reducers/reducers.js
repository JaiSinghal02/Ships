import * as actionTypes from "../actions/actions";

const initialState = {
  searchName: "",
  ships: null,
  shipsCount: 0,
  constCount:0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEACRH_NAME:
      return {
        ...state,
        searchName: action.searchName
      };
    case actionTypes.SET_SHIPS_DATA:
      return {
        ...state,
        ships: action.ships
        
      };
    case actionTypes.SET_SHIPS_COUNT:
      return {
        ...state,
        shipsCount: action.count
      };
    default:
      return state;
  }
};

export default reducer;
