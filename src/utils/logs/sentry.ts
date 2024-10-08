import * as Sentry from '@sentry/react';

const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;
const ENVIRONMENT: string | undefined = import.meta.env.VITE_ENVIRONMENT;
const setupSentry = () => {
  if (SENTRY_DSN) {
    Sentry.init({
      dsn: SENTRY_DSN,
      environment: ENVIRONMENT ? ENVIRONMENT : 'dev',
      integrations: [],
    });
  }
};

export default setupSentry;
