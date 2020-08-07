import axios from 'axios';
import { SEARCH_PRODUCTS } from "./types";

export const searchProducts = (searchParam) => async dispatch => {
  const res = await axios.get('/api/products/' + searchParam);
  dispatch({ type: SEARCH_PRODUCTS, payload: { searchParam, data: res.data } });
};