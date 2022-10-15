import { TextField } from '@mui/material';
import React from 'react';

function Search() {
  return (
    <TextField
      type="search"
      label="Search for a country..."
      sx={{ m: 1, width: { sm: '50%' } }}
    />
  );
}

export default Search;
