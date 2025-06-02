// test-utils.js
import { render } from '@testing-library/react';
import { ThemeProvider, useTheme } from 'styled-components';
import themes from '../../components/styles/theme';
import { SideBarProvider } from '../../context/sideBar.context';
import { ThemeSwitcherProvider } from '../../context/themeSwitcher.context';

// const userTheme = process.env.NEXT_PUBLIC_LIGHT_THEME | 'blueSky';
const userTheme = 'blueSky';
// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers = ({ children }) => {
  return (
    <SideBarProvider>
      <ThemeSwitcherProvider userTheme={userTheme} toggleTheme={() => {}}>
        <ThemeProvider theme={themes[userTheme]}>{children}</ThemeProvider>
      </ThemeSwitcherProvider>
    </SideBarProvider>
  );
};

const customRender = (ui, options = {}) => {
  return render(ui, { wrapper: Providers, ...options });
};

// re-export everything
export * from '@testing-library/react';
export * from '@testing-library/jest-dom';
// override render method
export { customRender as render };
