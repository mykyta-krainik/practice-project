import clsx from 'clsx';

import { Suspense } from 'react';

import { useTheme } from '@/shared/providers';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher';

import { AppRouter } from './providers/router';

import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={clsx('app', theme)}>
      <Suspense fallback={null}>
        <Navbar />

        <main className="content-page">
          <Sidebar>
            <ThemeSwitcher />

            <LanguageSwitcher />
          </Sidebar>

          <AppRouter />
        </main>
      </Suspense>
    </div>
  );
};

export default App;