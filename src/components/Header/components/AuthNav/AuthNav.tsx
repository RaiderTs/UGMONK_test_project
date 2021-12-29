import { ShoppingCartOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import styled from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={styled.authNav__container}>
      <ul className={styled.authNav__list}>
        <div className={styled.authNav__itemContainer}>
          <li className={styled.authNav__item}>Journal</li>
          <li className={styled.authNav__item}>|</li>
          <li className={styled.authNav__item}>Search</li>
        </div>
        <div className={styled.authNav__itemContainerLogin}>
          <li className={styled.authNav__item}>Login</li>
          <li className={styled.authNav__item}>|</li>
          <li className={styled.authNav__item}>
            <ShoppingCartOutlined style={{ fontSize: '17.5px' }} />
          </li>
        </div>
      </ul>
    </div>
  );
};

export default AuthNav;
