import React from 'react';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
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
      >
        <div>
          <p className={styles.detail__name}>{product.name}</p>
          <div className={styles.detail__container}>
            <p>
              <img src={product.image} alt="" />
            </p>
            <div>
              <p className={styles.detail__productDescription}>
                Product description
              </p>
              <p className={styles.detail__description}>{product.text}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductDetailsPage;
