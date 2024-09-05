import Home from '../features/home/components/page/Home.tsx';
import Trend from '../features/trend/components/page/Trend.tsx';
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
