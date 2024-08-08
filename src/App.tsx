import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import clsx from 'clsx';

import MainPage from './pages/MainPage/MainPage.async';
import AboutPage from './pages/AboutPage/AboutPage.async';

import RootLayout from './components/RootLayout';

import { useTheme } from './contexts/theme/useTheme';

import './styles/index.scss';
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={clsx('app', theme)}>
      <ThemeSwitcher />

      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Suspense fallback={<div>Loading Home page...</div>}><MainPage /></Suspense>} />

          <Route path="/about" element={<Suspense fallback={<div>Loading About page...</div>}><AboutPage /></Suspense>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;