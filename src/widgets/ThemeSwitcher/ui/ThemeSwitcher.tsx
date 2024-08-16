import { useTheme, Theme } from '@/shared/providers';
import { Button, ButtonTheme } from '@/shared/ui';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';

import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAN}
      className={styles.themeSwitcher}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? (
        <DarkIcon />
      ) : (
        <LightIcon />
      )}
    </Button>
  );
};