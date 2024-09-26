import Home from '@/src/features/home/Home.tsx';
import Trend from '@/src/features/archive/Trend.tsx';
import { Route, Routes } from 'react-router-dom';
import { TrendProvider } from '@/src/features/archive/context/TrendContext.tsx';
import Layout from '@/src/components/layout/Layout.tsx';
import Search from '@/src/features/search/Search.tsx';
import { FilterWordsProvider } from '@/src/features/search/context/FilterWordsContext.tsx';

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
        path="/archive"
        element={
          <TrendProvider>
            <Layout>
              <Trend />
            </Layout>
          </TrendProvider>
        }
      />
      <Route
        path="/search"
        element={
          <FilterWordsProvider>
            <Layout>
              <Search />
            </Layout>
          </FilterWordsProvider>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
