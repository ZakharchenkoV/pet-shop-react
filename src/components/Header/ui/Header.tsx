import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import logo from '../../../assets/logo.svg';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const onCatalogClick = () => {};
  const onCartClick = () => {};
  const onAccountlick = () => {};

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const navigate = useNavigate();

  const handleLogoClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    navigate('/');
  };

  return (
    <header>
      <Link
        to={'/'}
        className={styles['header_left-icon']}
        onClick={handleLogoClick}
      >
        <img src={logo} alt="Мой магазин" className={styles['logo-icon']} />
        <h2 className={styles['title']}>Мой магазин</h2>
      </Link>
      <div className={styles['header_right-buttons']}>
        <Link to={'/catalog'} id="catalog" onClick={onCatalogClick}>
          Каталог
        </Link>
        <Link to={'/cart'} id="cart" onClick={onCartClick}>
          Корзина
        </Link>
        <Link to={'/account'} id="account" onClick={onAccountlick}>
          ЛК
        </Link>
      </div>
    </header>
  );
};
