import GlobalStyles from './styles/GlobalStyles';
import Navbar from './ui/Navigation/Navbar';
import Background from './ui/Background';
import { AnimatePresence } from 'framer-motion';
import AnimatedRoutes from './ui/Navigation/AnimatedRoutes';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Background />
      <AnimatePresence mode="wait">
        <AnimatedRoutes />
      </AnimatePresence>
    </>
  );
}

export default App;
