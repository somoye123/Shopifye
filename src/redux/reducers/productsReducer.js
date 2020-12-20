import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.products, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS_BEGIN:
      return { ...state, products_loading: true };
    case types.GET_PRODUCTS_SUCCESS:
      const featured_products = action.products.filter(
        (product) => product.featured === true
      );
      return {
        ...state,
        products_loading: false,
        products: action.products,
        featured_products,
      };
    case types.GET_PRODUCTS_ERROR:
      return { ...state, products_loading: false, products_error: true };
    default:
      return state;
  }
};
