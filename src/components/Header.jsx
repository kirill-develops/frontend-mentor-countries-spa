import { AppBar, Toolbar, Typography } from '@mui/material';
import { Button } from 'gatsby-theme-material-ui';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from 'react';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>Where In The World?</Typography>
        <Button
          color="inherit"
          startIcon={<DarkModeIcon />}
        >
          Dark Mode
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
