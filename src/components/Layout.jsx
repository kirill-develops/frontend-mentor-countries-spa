import Stack from '@mui/material/Stack';
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import Header from '../components/Header';
import SearchHeader from '../components/SearchHeader/SearchHeader';
import { darkTheme, lightTheme, mainStyleProps } from '../styles/theme';
import { darkModeContext } from './ThemeHandler';
import '../styles/global-styles.css';
import { SEO } from './SEO';

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
  const [hasMounted, setHasMounted] = useState(false);
  const preferedColorMode = useMediaQuery('(prefers-color-scheme: dark)')
    ? 'dark'
    : 'light';
  const preferedColorModeBool = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => {
    const theme = localStorage.getItem('color-mode');

    if (theme) {
      if (theme === 'dark') {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    } else {
      localStorage.setItem('color-mode', preferedColorMode);

      setDarkMode(preferedColorModeBool);
    }
    setHasMounted(true);
  }, []);

  const isHomepage = useMemo(() => location?.pathname === '/', [location]);

  const homepageSearch = useMemo(
    () =>
      isHomepage && (
        <SearchHeader
          search={search}
          setSearch={setSearch}
          setRegion={setRegion}
        />
      ),
    [isHomepage, search],
  );

  const backgroundColor = useMemo(
    () =>
      darkMode
        ? darkTheme.palette.background.default
        : lightTheme.palette.background.default,
    [darkMode],
  );

  if (!hasMounted) {
    return null;
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline enableColorScheme />
      <Stack sx={{ minHeight: '100vh', flexDirection: 'column' }}>
        <Stack
          sx={headerStyleProps}
          backgroundColor={backgroundColor}
        >
          <Header />
          {homepageSearch}
        </Stack>
        <Stack
          as="main"
          direction="column"
          sx={mainStyleProps}
        >
          {children}
        </Stack>
      </Stack>
      <SEO />
    </ThemeProvider>
  );
}

export default Layout;
