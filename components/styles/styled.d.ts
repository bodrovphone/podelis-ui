import 'styled-components';
import theme from './theme';

// Assuming 'blueSky' is a representative theme structure.
// If themes can have different structures, a more complex union or base type might be needed.
type AppTheme = typeof theme.blueSky;

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
