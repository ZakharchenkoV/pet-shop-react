import React from 'react';

import { Link } from 'react-router-dom';

import CartIcon from '../../../assets/cart.svg?react';
import CatalogIcon from '../../../assets/list.svg?react';
import logo from '../../../assets/logo.svg';
import UserIcon from '../../../assets/user.svg?react';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const onCatalogClick = () => {};
  const onCartClick = () => {};
  const onAccountlick = () => {};

  return (
    <header>
      <Link to={'/'} className={styles['header_left-icon']}>
        <img src={logo} alt="Мой магазин" className={styles['logo-icon']} />
        <h2 className={styles['title']}>Мой ресторан</h2>
      </Link>
      <div className={styles['header_right-buttons']}>
        <Link to={'/catalog'} id="catalog" onClick={onCatalogClick}>
          <CatalogIcon />
        </Link>
        <Link to={'/cart'} id="cart" onClick={onCartClick}>
          <CartIcon />
        </Link>
        <Link to={'/account'} id="account" onClick={onAccountlick}>
          <UserIcon />
        </Link>
      </div>
    </header>
  );
};
