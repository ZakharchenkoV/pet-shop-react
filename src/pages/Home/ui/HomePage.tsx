import { ClassCounter } from '@/features/ClassCounter';
import { Timer } from '@/features/Timer';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles['double-blocks']}>
      <ClassCounter />
      <Timer />
    </div>
  );
};
