import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@/shared/providers';
import { ErrorBoundary } from './ErrorBoundary';

export const Providers: FC = ({ children }) => (
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
