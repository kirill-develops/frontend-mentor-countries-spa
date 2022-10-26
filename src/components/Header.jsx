import { AppBar, Toolbar, Typography } from '@mui/material';
import { Button } from 'gatsby-theme-material-ui';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React, { useContext } from 'react';
import { darkModeContext } from './ThemeHandler';

function Header() {
  const DarkModeContext = useContext(darkModeContext);
  const { darkMode, setDarkMode } = DarkModeContext;

  const handleThemeChange = () => {
    if (darkMode) {
      localStorage.setItem('color-mode', 'light');
      setDarkMode(false);
    }
    if (!darkMode) {
      localStorage.setItem('color-mode', 'dark');
      setDarkMode(true);
    }
  };

  const themeModeString = darkMode ? 'Light' : 'Dark';

  return (
    <AppBar
      position="relative"
      sx={{ backgroundColor: 'background.paper', color: 'text.primary' }}
    >
      <Toolbar>
        <Typography
          variant="h1"
          sx={{ flexGrow: 1, fontSize: 16, fontWeight: 800 }}
        >
          Where In The World?
        </Typography>
        <Button
          color="inherit"
          startIcon={<DarkModeIcon />}
          onClick={handleThemeChange}
          sx={{ width: '135px', fontWeight: 600 }}
        >
          {themeModeString} Mode
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
