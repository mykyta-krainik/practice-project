import { FC } from 'react';
import { ThemeProvider } from './theme/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

export const Providers: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
};
