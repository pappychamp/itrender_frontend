import Home from '../components/pages/Home.tsx';
import Trend from '../components/pages/Trend.tsx';
import { Route, Routes } from 'react-router-dom';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trend" element={<Trend />} />
    </Routes>
  );
};

export default AppRoutes;
