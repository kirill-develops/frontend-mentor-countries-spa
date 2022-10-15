import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

function Region() {
  const [region, setRegion] = useState('');

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  return (
    <FormControl sx={{ m: 1, width: { xs: '50%', sm: '25%' } }}>
      <InputLabel>Filter By Region</InputLabel>
      <Select
        label="Filter By Region"
        value={region}
        onChange={handleRegionChange}
      >
        <MenuItem value="africa">Africa</MenuItem>
        <MenuItem value="america">America</MenuItem>
        <MenuItem value="asia">Asia</MenuItem>
        <MenuItem value="europe">Europe</MenuItem>
        <MenuItem value="oceania">Oceania</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Region;
