import Home from '../features/home/Home.tsx';
import Trend from '../features/trend/Trend.tsx';
import { Route, Routes } from 'react-router-dom';
import { TrendProvider } from '../features/trend/context/TrendContext.tsx';
import Layout from '../components/layout/Layout.tsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/trend"
        element={
          <TrendProvider>
            <Layout>
              <Trend />
            </Layout>
          </TrendProvider>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
