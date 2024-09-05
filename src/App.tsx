import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/Routes.tsx';
import { TrendProvider } from './features/trend/context/TrendContext.tsx';
const App = () => {
  return (
    <BrowserRouter>
      <TrendProvider>
        <AppRoutes />
      </TrendProvider>
    </BrowserRouter>
  );
};

export default App;
