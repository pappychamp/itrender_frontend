import Home from '../features/home/components/page/Home.tsx';
import Trend from '../features/trend/components/page/Trend.tsx';
import { Route, Routes } from 'react-router-dom';
import { TrendProvider } from '../features/trend/context/TrendContext.tsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/trend"
        element={
          <TrendProvider>
            <Trend />
          </TrendProvider>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
