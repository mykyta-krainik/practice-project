import { type FC } from 'react';
import clsx from 'clsx';

import { useTranslation } from 'react-i18next';

import { AppLink, AppLinkTheme } from '@/shared/ui';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <nav className={clsx(styles.navbar, className)}>
      <AppLink
        to="/"
        theme={AppLinkTheme.INVERTED}
      >
        {t('header.navbar.home')}
      </AppLink>

      <div className={styles.links}>
        <AppLink
          to="/"
          theme={AppLinkTheme.INVERTED}
        >
          {t('header.navbar.home')}
        </AppLink>

        <AppLink
          to="/about"
          theme={AppLinkTheme.INVERTED}
        >
          {t('header.navbar.about')}
        </AppLink>
      </div>
    </nav>
  );
};
