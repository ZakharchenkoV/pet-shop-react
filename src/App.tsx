import { Route, Routes } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import './index.scss';
import { AccountPage } from './pages/AccountPage';
import { CartPage } from './pages/CartPage/CartPage';
import { CatalogPage } from './pages/CatalogPage';
import { HomePage } from './pages/HomePage';

const App = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
