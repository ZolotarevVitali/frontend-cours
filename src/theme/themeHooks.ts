import { useCallback, useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface IUseTheme {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): IUseTheme {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === Theme.DEFAULT ? Theme.LIGHT : Theme.DEFAULT; 
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }, [theme]);

  return {theme, toggleTheme};
}