import * as Sentry from '@sentry/react';
import { SENTRY_DSN, ENVIRONMENT } from '@/src/constants/config';

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
