import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import styles from './ProductDetailsPage.module.css';
import { IProduct } from '../MainPage/components/CardComponent/CardComponent';
import '../../css/variablesAnt.css';

interface ModalProps {
  product: IProduct;
  handleOk: () => void;
  handleCancel: () => void;
  isModalVisible: boolean;
}

const ProductDetailsPage: React.FC<ModalProps> = ({
  product,
  handleOk,
  handleCancel,
  isModalVisible,
}) => {
  console.log(product);
  return (
    <div>
      <Modal
        className={styles.detail__modal}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <div style={{ position: 'relative' }}>
          <p className={styles.detail__name}>{product.name}</p>
          <div className={styles.detail__container}>
            <p>
              <img src={product.image} alt="img" width="400" height="500" />
            </p>
            <div>
              <p className={styles.detail__productDescription}>
                Product description
              </p>
              <p className={styles.detail__description}>{product.text}</p>
              <div className={styles.detail__buttonAddToBasket}>
                <Button
                  type="primary"
                  icon={<ShoppingCartOutlined style={{ fontSize: '20px' }} />}
                  size="large"
                  style={{ backgroundColor: '#000000', border: 'none' }}
                >
                  Add to basket
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductDetailsPage;
