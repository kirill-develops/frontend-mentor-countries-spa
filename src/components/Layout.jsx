import Stack from '@mui/material/Stack';
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import SearchHeader from '../components/SearchHeader/SearchHeader';
import { darkTheme, lightTheme, mainStyleProps } from '../styles/theme';
import { darkModeContext } from './ThemeHandler';

const headerStyleProps = {
  position: 'sticky',
  top: 0,
  zIndex: 1,
  flexDirection: 'column',
  gap: 3,
  pb: 3,
};

function Layout({ location, children, setRegion, setSearch, search }) {
  const DarkModeContext = useContext(darkModeContext);
  const { darkMode, setDarkMode } = DarkModeContext;

  useEffect(() => {
    const theme = localStorage.getItem('color-mode');

    if (theme) {
      const themePreference = localStorage.getItem('color-mode');
      if (themePreference === 'dark') {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    } else {
      const prefersMode = useMediaQuery('(prefers-color-scheme: dark)')
        ? 'dark'
        : 'light';
      const prefersModeBool = useMediaQuery('(prefers-color-scheme: dark)');

      localStorage.setItem('color-mode', prefersMode);
      setDarkMode(prefersModeBool);
    }
  }, []);

  const isHomepage = location?.pathname === '/';
  const homePageSearch = isHomepage && (
    <SearchHeader
      search={search}
      setSearch={setSearch}
      setRegion={setRegion}
    />
  );

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline enableColorScheme />
      <Stack sx={{ minHeight: '100vh', flexDirection: 'column' }}>
        <Stack
          sx={headerStyleProps}
          backgroundColor={
            darkMode
              ? darkTheme.palette.background.default
              : lightTheme.palette.background.default
          }
        >
          <Header />
          {homePageSearch}
        </Stack>
        <Stack
          as="main"
          direction="column"
          sx={mainStyleProps}
        >
          {children}
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default Layout;
