import type { FC, ReactNode } from 'react';
import { useState } from 'react';
import clsx from 'clsx';

import { Button, ButtonTheme } from '@/shared/ui';

import { useTranslation } from 'react-i18next';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  children?: ReactNode;
}

export const Sidebar: FC<SidebarProps> = ({ children }) => {
  const { t } = useTranslation();

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={clsx(
        styles.sidebar,
        {
          [styles.collapsed]: isCollapsed,
        },
      )}
    >
      <Button
        theme={ButtonTheme.CLEAN}
        className={styles.toggleButton}
        onClick={() => setIsCollapsed((prev) => !prev)}
      >
        {t('sidebar.toggle')}
      </Button>

      <section className={styles.switchers}>{children}</section>
    </aside>
  );
};
