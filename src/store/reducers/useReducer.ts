interface ProductState {
  product: any[];
  loading: boolean;
  error: null | string;
}

interface ProductAction {
  type: string;
  payload?: any;
}

enum ProductActionTypes {
  FETCH_PRODUCT = 'FETCH_PRODUCT',
  FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS',
  FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR',
}

interface FetchProductAction {
  type: ProductActionTypes.FETCH_PRODUCT;
}
interface FetchProductSuccessAction {
  type: ProductActionTypes.FETCH_PRODUCT_SUCCESS;
  payload: any[];
}
interface FetchProductErrorAction {
  type: ProductActionTypes.FETCH_PRODUCT_ERROR;
  payload: string;
}

type ProductAction =
  | FetchProductAction
  | FetchProductSuccessAction
  | FetchProductErrorAction;

const initialState: ProductState = {
  product: [],
  loading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCT:
      return { ...state, loading: true, error: null, product: [] };
    case ProductActionTypes.FETCH_PRODUCT_SUCCESS:
      return { ...state, loading: false, error: null, product: action.payload };
    case ProductActionTypes.FETCH_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload, product: [] };
    default:
      return state;
  }
};
