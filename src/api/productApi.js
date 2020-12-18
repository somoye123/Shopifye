import { handleResponse, handleError } from './apiUtils'
import { products_url as url } from '../utils/constants'

export const fetchProducts = async () => {
  try {
    const data = await fetch(url)
    const response = await handleResponse(data)
    return response
  } catch (err) {
    const error = handleError(err)
    return error
  }
}
