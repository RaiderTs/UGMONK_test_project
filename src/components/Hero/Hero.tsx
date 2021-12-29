import { Button } from 'antd';
import 'antd/dist/antd.css';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <h2 className={styles.hero__text}>
          Analog: The Simplest Productivity System
        </h2>
        <Button
          className={styles.hero__button}
          type="primary"
          style={{ width: '80px', height: '45px', padding: '0' }}
        >
          <span className={styles.hero__buttonText}>
            Learn more &nbsp; &nbsp;
          </span>
          →
        </Button>
      </div>
    </section>
  );
};

export default Hero;
