import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.navBar__container}>
      <ul className={styles.navBar__list}>
        <li>Men</li>
        <li>Women</li>
        <li>Objects</li>
        <li>Analog</li>
      </ul>
    </div>
  );
};

export default NavBar;
