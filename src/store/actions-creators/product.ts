import { ProductAction, ProductActionTypes } from 'store/types/product';
import { Dispatch } from 'redux';

import axios from 'axios';

// https://61d2db60b4c10c001712b620.mockapi.io

export const fetchProduct = (page = 1, limit = 20) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({ type: ProductActionTypes.FETCH_PRODUCT });
      // логика запроса
      const response = await axios.get(
        'https://61d2db60b4c10c001712b620.mockapi.io/Product'
        // {
        //   params: { _page: page, _limit: limit },
        // }
      );
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCT_ERROR,
        payload: 'Произошла ошибка при загрузке продуктов',
      });
    }
  };
};

// Для изминения номера страницы

export function setProductPage(page: number): ProductAction {
  return { type: ProductActionTypes.SET_PRODUCT_PAGE, payload: page };
}
