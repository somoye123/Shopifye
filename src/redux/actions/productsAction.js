import * as types from './actionTypes'
import * as productApi from '../../api/productApi'

export const loadProducts = async () => {
  const data = await productApi.fetchProducts()
  console.log(data)
}
