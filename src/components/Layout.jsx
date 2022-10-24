import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import Header from '../components/Header';
import SearchHeader from '../components/SearchHeader/SearchHeader';
import { darkTheme, lightTheme, mainStyleProps } from '../styles/theme';

const headerStyleProps = {
  position: 'sticky',
  top: 0,
  zIndex: 1,
  flexDirection: 'column',
  gap: 3,
  pb: 3,
};

function Layout({ location, children, setRegion, setSearch, search }) {
  const prefersMode = useMediaQuery('(prefers-color-scheme: dark)')
    ? 'dark'
    : 'light';

  let storedTheme;
  if (typeof Storage !== 'undefined') {
    if (localStorage.getItem('themeMode'))
      storedTheme = localStorage.getItem('themeMode');
    else {
      localStorage.setItem('themeMode', prefersMode);
      storedTheme = prefersMode;
    }
  } else {
    storedTheme = prefersMode;
  }

  const [themeMode, setThemeMode] = useState(storedTheme);
  const isDark = themeMode === 'dark';
  const isHomepage = location?.pathname === '/';

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Stack sx={{ minHeight: '100vh', flexDirection: 'column' }}>
        <Stack
          sx={headerStyleProps}
          backgroundColor={
            isDark
              ? darkTheme.palette.background.default
              : lightTheme.palette.background.default
          }
        >
          <Header
            themeMode={themeMode}
            setThemeMode={setThemeMode}
          />
          {isHomepage && (
            <SearchHeader
              search={search}
              setSearch={setSearch}
              setRegion={setRegion}
            />
          )}
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
