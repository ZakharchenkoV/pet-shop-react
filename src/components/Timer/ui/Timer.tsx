import { useState, useEffect } from 'react';
import styles from './Timer.module.scss';
import { ButtonsBlock } from '../../ButtonsBlock';
/** 
Написать таймер который запускается/останавливается при клике на кнопку
если таймер запущен, то каждую секунду он увеличивается на 1
*/

export const Timer: React.FC = () => {
  const [timerState, setTimerState] = useState(false);

  const [secs, setSecs] = useState(0);
  const [mins, setMins] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    if (!timerState) return;

    const timer = setInterval(() => {
      setSecs((prevSecs) => prevSecs + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timerState]);

  useEffect(() => {
    if (secs > 59) {
      setMins((prevMins) => prevMins + 1);
      setSecs(0);
    }
    if (mins > 59) {
      setHours((prevHours) => prevHours + 1);
      setMins(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secs]);

  const counterAttributor = (state: number) => {
    return state < 10 ? `0${state}` : state;
  };

  const toggleTimer = () => {
    setTimerState((prev) => !prev);
  };

  return (
    <div className={styles['timer-wrapper']}>
      <h1>
        {counterAttributor(hours)}:{counterAttributor(mins)}:
        {counterAttributor(secs)}
      </h1>
      <ButtonsBlock
        firstButton={timerState ? 'Остановить' : 'Пуск'}
        firstButtonClickHandler={toggleTimer}
      />
    </div>
  );
};
