import { useCallback, useContext, useEffect } from 'react';
import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from './ThemeContext';

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

type UseTheme = () => UseThemeResult;

export const useTheme: UseTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);

      return newTheme;
    });
  }, []);

  return {
    theme,
    toggleTheme,
  };
};
