import 'antd/dist/antd.css';

import Header from './components/Header';
import Hero from './components/Hero';
import MainPage from './components/MainPage';
import SalePage from './components/SalePage';
import ShopPage from './components/ShopPage';
import GatherPage from './components/GatherPage';
import AboutPage from './components/AboutPage';
import EmailPage from 'components/EmailPage';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <MainPage />
        <SalePage />
        <ShopPage />
        <GatherPage />
        <AboutPage />
        <EmailPage />
        <Footer />
      </main>
    </div>
  );
}

export default App;
