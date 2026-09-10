import { useContext } from 'react';

import ThemeContext from '../context';

import type { Theme } from '@eduplexmkt/mkt-theme';

const useTheme = (): Theme => useContext(ThemeContext);

export default useTheme;
