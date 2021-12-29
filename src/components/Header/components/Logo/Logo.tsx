import React from 'react';
// import { NavLink } from 'react-router-dom';
import LogoImg from '../../../../assets/logo.svg';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo__container}>
      <nav className={styles.logo__nav}>
        {/* <NavLink
          to="/"
          className="header-nav"
          //   activeClassName="header-nav__active"
        > */}
        <img className={styles.logo__img} src={LogoImg} alt="logo" />
        {/* </NavLink> */}
      </nav>
    </div>
  );
};

export default Logo;
