import {
  ProductAction,
  ProductState,
  ProductActionTypes,
} from '../types/product';

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
  page: 1,
  limit: 20,
};

export const productReducer = (
  state = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCT:
      return { ...state, loading: true, error: null, products: [] };
    case ProductActionTypes.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case ProductActionTypes.FETCH_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload, products: [] };
    case ProductActionTypes.SET_PRODUCT_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
