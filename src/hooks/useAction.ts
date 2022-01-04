import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProductActionCreators from 'store/actions-creators/product';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ProductActionCreators, dispatch);
};
