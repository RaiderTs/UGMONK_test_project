import { Button } from 'antd';
import 'antd/dist/antd.css';
import Image from '../../assets/Rectangle (9).jpg';
import styles from './GatherPage.module.css';

const GatherPage = () => {
  return (
    <section className={styles.gatherPage__section}>
      <div className={styles.gatherPage__container}>
        <div className={styles.gatherPage__leftContainer}>
          <h2 className={styles.gatherPage__title}>Gather</h2>
          <p className={styles.gatherPage__text}>
            The minimal, modular desk organizer that cuts through the clutter
          </p>
          <div className={styles.gatherPage__leftContainerButton}>
            <Button
              className={styles.gatherPage__button}
              type="primary"
              style={{ width: '80px', height: '45px', padding: '0' }}
            >
              <span className={styles.gatherPage__buttonText}>
                Learn more &nbsp; &nbsp;
              </span>
              →
            </Button>
          </div>
        </div>
        <div className={styles.gatherPage__authContainer}>
          <img src={Image} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default GatherPage;
