import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useActions } from 'hooks/useAction';
import ProductDetailsPage from '../../../ProductDetailsPage';

import 'antd/dist/antd.css';
import { Button } from 'antd';

import styles from './CardComponent.module.css';
export interface IProduct {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  price_discount: number;
  text: string;
}

const CardComponent: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (product: IProduct) => {
    setIsModalVisible(true);
    setSelectedProduct(product);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { page, limit, error, loading, products } = useTypedSelector(
    (state) => state.product
  );

  const { fetchProduct } = useActions();

  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) {
    return <h1>Loading in progress...</h1>;
  }

  if (error) {
    return (
      <h1>
        {error}
        An error has occurred...
      </h1>
    );
  }

  return (
    <div className={styles.card}>
      <ul className={styles.card__page}>
        {products.map((product) => (
          <li key={product.id} className={styles.card__container}>
            <img
              className={styles.card__img}
              src={product.image}
              alt="img"
              width="275"
              height="341"
            />
            <div className={styles.card__titleContainer}>
              <h3 className={styles.card__title}>{product.name} &nbsp;</h3>
              <p className={styles.card__titleClarification}>
                ({product.description})
              </p>
            </div>
            <div className={styles.card__priceContainer}>
              <div className={styles.card__price}>${product.price} &nbsp;</div>
              <div className={styles.card__pricePromotional}>
                ${product.prise_discount}
              </div>
            </div>
            <div className={styles.card__detail}>
              <Button
                className={styles.card__detailButton}
                type="primary"
                onClick={() => showModal(product)}
              >
                Details
              </Button>
            </div>
          </li>
        ))}
      </ul>
      {selectedProduct !== null ? (
        <>
          <ProductDetailsPage
            product={selectedProduct}
            handleOk={handleOk}
            handleCancel={handleCancel}
            isModalVisible={isModalVisible}
          />
        </>
      ) : null}
    </div>
  );
};

export default CardComponent;
