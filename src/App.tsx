import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/Routes.tsx';
import * as Sentry from '@sentry/react';
import ErrorBoundaryFallback from './components/molecules/ErrorBoundaryFallback.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sentry.ErrorBoundary fallback={<ErrorBoundaryFallback />}>
        <div data-testid="app-component">
          <AppRoutes />
        </div>
      </Sentry.ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
