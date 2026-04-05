import { ClassCounter } from '../../../components/ClassCounter';
import { Timer } from '../../../components/Timer';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles['double-blocks']}>
      <ClassCounter />
      <Timer />
    </div>
  );
};
