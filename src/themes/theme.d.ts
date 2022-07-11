import {} from 'styled-components';
import type { ThemeType } from './ThemeTypes';

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}
