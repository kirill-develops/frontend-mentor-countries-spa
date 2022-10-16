import { TextField } from '@mui/material';
import React from 'react';

function Search({ search, setSearch }) {
  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };
  return (
    <TextField
      type="search"
      label="Search for a country..."
      value={search}
      onChange={handleSearchInput}
      sx={{ m: 1, width: { sm: '50%' } }}
    />
  );
}

export default Search;
