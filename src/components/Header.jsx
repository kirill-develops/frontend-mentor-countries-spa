import { AppBar, Toolbar, Typography } from '@mui/material';
import { Button } from 'gatsby-theme-material-ui';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from 'react';

function Header({ themeMode, setThemeMode }) {
  const handleThemeChange = () => {
    if (themeMode === 'dark') {
      localStorage.setItem('themeMode', 'light');
      setThemeMode('light');
    }
    if (themeMode === 'light') {
      localStorage.setItem('themeMode', 'dark');
      setThemeMode('dark');
    }
  };

  const themeModeString = themeMode === 'dark' ? 'Light' : 'Dark';

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
