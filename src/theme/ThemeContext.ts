import { createContext } from "react";

export enum Theme {
    DEFAULT = 'default',
    LIGHT = 'light'
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (them: Theme) => void; 
}

export const ThemeContext = createContext<ThemeContextProps>({});