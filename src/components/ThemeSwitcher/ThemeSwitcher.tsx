import { useTheme } from '../../contexts/theme/useTheme';

import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.themeSwitcher} onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
    </button>
  );
};