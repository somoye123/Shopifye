import * as types from './actionTypes';
import * as productApi from '../../api/productApi';

export function fetchProducts() {
  return async (dispatch) => {
    dispatch({ type: types.GET_PRODUCTS_BEGIN });
    try {
      const response = await productApi.fetchProducts();
      const products = response;
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, products });
    } catch (error) {
      dispatch({ type: types.GET_PRODUCTS_ERROR });
    }
  };
}
