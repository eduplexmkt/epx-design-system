import { createContext } from 'react';
import { type Theme, theme } from '@eduplexmkt/mkt-theme';

const ThemeContext = createContext<Theme>(theme.light);

if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'ThemeContext';
}

export default ThemeContext;
