import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import './index.scss';
import { AccountPage } from './pages/AccountPage';
import { CartPage } from './pages/CartPage';
import { CatalogPage } from './pages/CatalogPage';
import { HomePage } from './pages/HomePage';

const App = () => {
  const date = new Date();
  const footerDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}г.`;

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
      <footer>
        <p>{footerDate}</p>
      </footer>
    </>
  );
};

export default App;
