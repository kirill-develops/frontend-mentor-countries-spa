import { AppBar, Toolbar, Typography } from '@mui/material';
import { Button } from 'gatsby-theme-material-ui';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from 'react';

function Header({ themeMode, setThemeMode }) {
  const handleThemeChange = () => {
    if (themeMode === 'dark') setThemeMode('light');
    if (themeMode === 'light') setThemeMode('dark');
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: 'background.paper', color: 'text.primary' }}
    >
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>Where In The World?</Typography>
        <Button
          color="inherit"
          startIcon={<DarkModeIcon />}
          onClick={handleThemeChange}
        >
          Dark Mode
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
