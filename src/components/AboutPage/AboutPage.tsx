import { Button } from 'antd';
import 'antd/dist/antd.css';
import styles from './AboutPage.module.css';
import '../../css/variablesAnt.css';

const AboutPage = () => {
  return (
    <section className={styles.aboutPage}>
      <div className={styles.aboutPage__container}>
        <div className={styles.aboutPage__containerBox}>
          <h3 className={styles.aboutPage__title}>
            A design studio in Downingtown, PA, creating and curating products
            that combine form & function
          </h3>
          <Button
            className={styles.aboutPage__button}
            type="primary"
            style={{ width: '80px', height: '45px', padding: '0' }}
          >
            <span className={styles.aboutPage__CardButtonText}>
              &nbsp; Read Our Story &nbsp;
            </span>
            →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
