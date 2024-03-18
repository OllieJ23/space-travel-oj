import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../Home/HomePage';
import DestinationPage from '../Destination/DestinationPage';
import CrewPage from '../Crew/CrewPage';
import TechnologyPage from '../Technology/TechnologyPage';

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/crew" element={<CrewPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
