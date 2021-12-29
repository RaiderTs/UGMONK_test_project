import style from './Header.module.css';
import NavBar from './components/NavBar';
import Logo from './components/Logo';
import AuthNav from './components/AuthNav';
import TopHeader from './components/TopHeader';

const Header = () => {
  return (
    <section>
      <div className={style.header}>
        <TopHeader />
        <div className={style.header__list}>
          <Logo />
          <div className={style.header__nav}>
            <NavBar />
            <AuthNav />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
