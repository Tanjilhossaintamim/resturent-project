import * as actionTypes from "./ActionTypes";
import axios from "axios";
import { baseUrl } from "./baseURL";

// action for comment

export const add_comment = (dishId, author, rating, comment) => (dispatch) => {
  const newComment = {
    dishId: dishId,
    author: author,
    rating: rating,
    comment: comment,
  };
  newComment.date = new Date().toISOString();
  axios
    .post(baseUrl + "comments", newComment)
    .then((response) => response.data)
    .then((comment) => dispatch(concatComment(comment)))
    .catch((error) => dispatch(add_comment_error(error.message)));
};
const add_comment_error = (errorMessage) => {
  return {
    type: actionTypes.ADD_COMMENT_FAILED,
    payload: errorMessage,
  };
};

const concatComment = (comment) => ({
  type: actionTypes.ADD_COMMENT,
  payload: comment,
});

const comment_loading = () => {
  return {
    type: actionTypes.COMMENT_IS_LOADING,
  };
};

const loaded_comments = (comments) => {
  return {
    type: actionTypes.COMMENT_LOADED,
    payload: comments,
  };
};

export const fatchComments = () => (dispatch) => {
  dispatch(comment_loading),
    axios
      .get(baseUrl + "comments")
      .then((response) => response.data)
      .then((comments) => dispatch(loaded_comments(comments)));
};

// action for dishes

const spinner_loading = () => {
  return {
    type: actionTypes.SPINNER_LOADING,
  };
};

const menu_loading = (dish) => {
  return {
    type: actionTypes.MENU_LOADING,
    payload: dish,
  };
};

const dishLoadFailed = (errorMessage) => {
  return {
    type: actionTypes.DISH_LOADFAILED,
    payload: errorMessage,
  };
};

export const fatchMenu = () => (disptch) => {
  disptch(spinner_loading()),
    axios
      .get(baseUrl + "dishes")
      .then((response) => response.data)
      .then((dishes) => disptch(menu_loading(dishes)))
      .catch((error) => disptch(dishLoadFailed(error.message)));
};
/////////
