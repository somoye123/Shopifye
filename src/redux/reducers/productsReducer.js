import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default (state = initialState.products, action) => {
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};
