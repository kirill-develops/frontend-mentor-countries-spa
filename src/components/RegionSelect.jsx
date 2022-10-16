import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

function RegionSelect({ setRegion }) {
  const [regionValue, setRegionValue] = useState('');

  const handleRegionChange = (e) => {
    setRegionValue(e.target.value);
    setRegion(e.target.value);
  };

  const handleClearSelect = (e) => {
    if (e.keyCode === 27) {
      setRegionValue('');
      setRegion(undefined);
    }
  };

  return (
    <FormControl
      onKeyUp={handleClearSelect}
      sx={{ m: 1, width: { xs: '50%', sm: '25%' } }}
    >
      <InputLabel>Filter By Region</InputLabel>
      <Select
        label="Filter By Region"
        value={regionValue}
        onChange={handleRegionChange}
      >
        <MenuItem value="Africa">Africa</MenuItem>
        <MenuItem value="Americas">America</MenuItem>
        <MenuItem value="Asia">Asia</MenuItem>
        <MenuItem value="Europe">Europe</MenuItem>
        <MenuItem value="Oceania">Oceania</MenuItem>
      </Select>
    </FormControl>
  );
}

export default RegionSelect;
