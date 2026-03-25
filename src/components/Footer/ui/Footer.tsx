import React from 'react';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles['footer']}>
      <p>Все товары вымышлены.</p>
      <p>Все совпадения случайны.</p>
    </footer>
  );
};
