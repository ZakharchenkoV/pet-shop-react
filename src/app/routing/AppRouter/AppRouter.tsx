import type React from 'react';

import { Route, Routes } from 'react-router-dom';

import { AccountPage } from '@/pages/Account';
import { CartPage } from '@/pages/Cart';
import { CatalogPage } from '@/pages/Catalog';
import { HomePage } from '@/pages/Home';

import styles from './AppRouter.module.scss';

export const AppRouter: React.FC = () => {
  return (
    <main className={styles['app-router-content']}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </main>
  );
};
