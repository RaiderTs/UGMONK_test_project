import { Button } from 'antd';
import 'antd/dist/antd.css';
import Image from '../../assets/Rectangle (9).jpg';
import styles from './SalePage.module.css';

const SalePage = () => {
  return (
    <section className={styles.salePage__section}>
      <div className={styles.salePage__container}>
        <div className={styles.salePage__leftContainer}>
          <h2 className={styles.salePage__title}>
            Final Stock - Up to 50% Off
          </h2>
          <div className={styles.salePage__leftContainerButton}>
            <Button
              className={styles.salePage__button}
              type="primary"
              style={{ width: '80px', height: '45px', padding: '0' }}
            >
              <span className={styles.salePage__buttonText}>
                Learn more &nbsp; &nbsp;
              </span>
              →
            </Button>
          </div>
        </div>
        <div className={styles.salePage__authContainer}>
          <img src={Image} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default SalePage;
