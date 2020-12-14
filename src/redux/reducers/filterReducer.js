import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default (state = initialState.fliter, action) => {
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};
