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

export function fetchSingleProduct(url) {
  return async (dispatch) => {
    dispatch({ type: types.GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await productApi.fetchSingleProduct(url);
      const singleProduct = response;
      dispatch({ type: types.GET_SINGLE_PRODUCT_SUCCESS, singleProduct });
    } catch (error) {
      dispatch({ type: types.GET_SINGLE_PRODUCT_ERROR });
    }
  };
}
