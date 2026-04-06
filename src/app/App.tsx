import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import '../index.scss';
import { AppRouter } from './routing';

const App = () => {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
};

export default App;
