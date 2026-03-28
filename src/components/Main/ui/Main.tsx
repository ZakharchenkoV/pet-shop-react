import type React from 'react';

import { Route, Routes } from 'react-router-dom';

import { AccountPage } from '../../../pages/AccountPage';
import { CartPage } from '../../../pages/CartPage/CartPage';
import { CatalogPage } from '../../../pages/CatalogPage';
import { HomePage } from '../../../pages/HomePage';

import styles from './Main.module.scss';

export const Main: React.FC = () => {
  return (
    <main className={styles['main-content']}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </main>
  );
};
