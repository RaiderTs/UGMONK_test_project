import { Button } from 'antd';
import 'antd/dist/antd.css';
import Image from '../../assets/Rectangle (7).jpg';
import ImageBottom from '../../assets/Rectangle (8).jpg';
import styles from './ShopPage.module.css';

const ShopPage = () => {
  return (
    <section className={styles.shopPage}>
      <div className={styles.shopPage__container}>
        <h3 className={styles.shopPage__title}>
          Our mission is to create simple, beautiful objects that combine form
          and function.
        </h3>
        <div className={styles.shopPage__cardsContainer}>
          <div className={styles.shopPage__card}>
            <img src={Image} alt="img" width="522" height="647" />
            <Button
              className={styles.shopPage__button}
              type="primary"
              style={{ width: '80px', height: '45px', padding: '0' }}
            >
              <span className={styles.shopPage__CardButtonText}>
                Learn more &nbsp; &nbsp;
              </span>
              →
            </Button>
          </div>
          <div className={styles.shopPage__card}>
            <img src={Image} alt="img" width="522" height="647" />
            <Button
              className={styles.shopPage__button}
              type="primary"
              style={{ width: '80px', height: '45px', padding: '0' }}
            >
              <span className={styles.shopPage__CardButtonText}>
                Learn more &nbsp; &nbsp;
              </span>
              →
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.shopPage__cardContainerBottom}>
        <img src={ImageBottom} alt="img" width="1160" height="657" />
        <Button
          className={styles.shopPage__button}
          type="primary"
          style={{ width: '80px', height: '45px', padding: '0' }}
        >
          <span className={styles.shopPage__CardButtonText}>
            Learn more &nbsp; &nbsp;
          </span>
          →
        </Button>
      </div>
    </section>
  );
};

export default ShopPage;
