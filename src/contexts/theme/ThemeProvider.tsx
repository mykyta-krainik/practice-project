import { FC, useMemo, useState, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

const getDefaultTheme = () => {
  const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

  if (storedTheme) {
    return storedTheme;
  }

  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersDarkMode) {
    return Theme.DARK;
  }

  return Theme.LIGHT;
}

const defaultTheme = getDefaultTheme();

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const contextValue = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  useEffect(() => {
    const changeTheme = (event: MediaQueryListEvent) => {
      const newColorScheme = event.matches ? Theme.DARK : Theme.LIGHT;

      setTheme(newColorScheme);
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', changeTheme);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', changeTheme);
    };
  }, []);

  return (
    <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
  );
};
