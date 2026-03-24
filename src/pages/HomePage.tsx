import { ClassCounter } from '../components/ClassCounter';
import { Timer } from '../components/Timer';

export const HomePage = () => {
  return (
    <div>
      <div className={'double-blocks'}>
        <ClassCounter />
        <Timer />
      </div>
    </div>
  );
};
