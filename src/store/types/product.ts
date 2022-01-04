// Интерфейс для state
export interface ProductState {
  products: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

// Обьявление переменных для Action
export enum ProductActionTypes {
  FETCH_PRODUCT = 'FETCH_PRODUCT',
  FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS',
  FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR',
  SET_PRODUCT_PAGE = 'SET_PRODUCT_PAGE',
}

// Типизация каждого action

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

interface SetProductPageAction {
  type: ProductActionTypes.SET_PRODUCT_PAGE;
  payload: number;
}

// Action может принимать 3 параметра. Передаем тип ProductAction
export type ProductAction =
  | FetchProductAction
  | FetchProductSuccessAction
  | FetchProductErrorAction
  | SetProductPageAction;
