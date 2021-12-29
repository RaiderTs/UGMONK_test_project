import { Button } from 'antd';
import 'antd/dist/antd.css';
import styled from './TopHeader.module.css';

const TopHeader = () => {
  return (
    <div className={styled.topHeader}>
      <p className={styled.topHeader__text}>
        📦 Final Stock - Up to 50% off select items
      </p>
      <Button
        type="primary"
        style={{ backgroundColor: '#000', border: 'none' }}
      >
        Shop the Sale{' '}
      </Button>
    </div>
  );
};

export default TopHeader;
