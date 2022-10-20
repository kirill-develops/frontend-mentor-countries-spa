import React from 'react';
import { Button } from 'gatsby-theme-material-ui';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function BackButton() {
  return (
    <Button
      variant="outlined"
      to="/"
      startIcon={<ArrowBackIcon />}
      sx={{ my: { xs: 4, md: 'auto' }, ml: 4, width: '25%' }}
    >
      Back
    </Button>
  );
}

export default BackButton;
