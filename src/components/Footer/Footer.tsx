import {
  InstagramOutlined,
  TwitterOutlined,
  FacebookFilled,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

import Logo from '../../assets/foter/Vector.svg';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__sideBarContainer}>
          <ul className={styles.footer__sideBarList}>
            <li>Customer Service</li>
            <li>Help / FAQ</li>
            <li>Returns & Exchanges</li>
            <li>Sizing</li>
            <li>Gift Cards</li>
            <li>Contact Us</li>
          </ul>
          <ul className={styles.footer__list}>
            <li>About</li>
            <li>Our Story</li>
            <li>Shop</li>
            <li>Journal</li>
            <li>About Our Tees</li>
            <li>Reviews</li>
          </ul>
        </div>

        <div className={styles.footer__rightSidePanel}>
          <div className={styles.footer__rightSidePanelContainer}>
            <div className={styles.footer__rightSidePanelContent}>
              <p className={styles.footer__copyright}>© Ugmonk 2021</p>
              <p className={styles.footer__rightSidePanelText}>
                All images and content may not be{' '}
                <span>used without permission</span>
              </p>
            </div>

            <img src={Logo} alt="logo" />
          </div>

          <ul className={styles.footer__social}>
            <li className={styles.footer__socialItem}>
              <InstagramOutlined
                style={{ fontSize: '30px', cursor: 'pointer' }}
              />
            </li>
            <li>
              <TwitterOutlined
                style={{ fontSize: '30px', cursor: 'pointer' }}
              />
            </li>
            <li>
              <FacebookFilled style={{ fontSize: '30px', cursor: 'pointer' }} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
