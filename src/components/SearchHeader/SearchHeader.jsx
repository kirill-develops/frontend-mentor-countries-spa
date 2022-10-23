import { Stack } from '@mui/material';
import React from 'react';
import RegionSelect from './RegionSelect';
import Search from './Search';

function SearchHeader({ search, setSearch, setRegion }) {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      sx={{ justifyContent: { sm: 'space-between' } }}
    >
      <Search
        search={search}
        setSearch={setSearch}
      />
      <RegionSelect setRegion={setRegion} />
    </Stack>
  );
}

export default SearchHeader;
