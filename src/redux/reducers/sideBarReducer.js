import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default (state = initialState.SideBar, action) => {
  switch (action.type) {
    case types.SIDEBAR_OPEN:
      return true;
    case types.SIDEBAR_CLOSE:
      return false;
    default:
      return state;
  }
};
