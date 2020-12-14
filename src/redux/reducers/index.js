import { combineReducers } from "redux";
import Cart from "./cartReducer";
import Filter from "./filterReducer";
import Products from "./productsReducer";
import User from "./userReducer";
export default combineReducers({
  Cart,
  Filter,
  Products,
  User,
});
