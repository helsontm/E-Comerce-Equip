import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { setIsLoading } from './isLoading'

export const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        setProducts: (state, action ) => {
          return action.payload
          
        }

    }

})


export const getProductsThunk = () => (dispatch) => {
dispatch(setIsLoading(true))

  axios
  .get("https://e-commerce-api-v2.academlo.tech/api/v1/products")
 
 // .get(" https://ecommerce-app-ktdy.onrender.com/product")
  .then(resp => dispatch(setProducts(resp?.data)))
  .catch(error => console.error(error))
  .finally(() => dispatch(setIsLoading(false))) 

}

export const filterProductsByCategoryThunk = id => dispatch => {
  dispatch(setIsLoading(true))
  axios
  .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`)
  //.get(`https://ecommerce-app-ktdy.onrender.com/product?categoryId=${id}`)
  .then(resp => dispatch(setProducts(resp.data)))
  .catch(error => console.error(error))
  .finally(() => dispatch(setIsLoading(false)))
}

export const filterProductsByNameThunk = name => dispatch => {
  dispatch(setIsLoading(true))
  axios
  .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${name}`)
  //.get(`https://ecommerce-app-ktdy.onrender.com/product?title=${name}`)
  .then(resp => dispatch(setProducts(resp.data)))
  .catch(error => console.error(error))
  .finally(() => dispatch(setIsLoading(false)))
}
export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;