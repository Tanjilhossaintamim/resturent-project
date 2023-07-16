import { combineReducers } from "redux";
import * as actionTypes from "./ActionTypes";

const dishReducer = (
  state = { is_loading: false, dishes: [], error: null },
  action
) => {
  switch (action.type) {
    case actionTypes.SPINNER_LOADING:
      return {
        ...state,
        is_loading: true,
        dishes: [],
        error: null,
      };

    case actionTypes.MENU_LOADING:
      return {
        ...state,
        is_loading: false,
        dishes: action.payload,
        error: null,
      };
    case actionTypes.DISH_LOADFAILED:
      return {
        ...state,
        is_loading: false,
        dishes: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

const commentReducer = (
  state = { is_loading: true, comments: [], error: null },
  action
) => {
  switch (action.type) {
    case actionTypes.COMMENT_IS_LOADING:
      return {
        ...state,
        is_loading: true,
        comments: [],
        error: null,
      };
    case actionTypes.COMMENT_LOADED:
      return {
        ...state,
        is_loading: false,
        comments: action.payload,
        error: null,
      };
    case actionTypes.ADD_COMMENT:
      const comment = action.payload;

      return {
        ...state,
        comments: state.comments.concat(comment),
      };
    case actionTypes.ADD_COMMENT_FAILED:
      return {
        ...state,
        is_loading: false,
        comments: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const Reducer = combineReducers({
  dishes: dishReducer,
  comments: commentReducer,
});

export default Reducer;
