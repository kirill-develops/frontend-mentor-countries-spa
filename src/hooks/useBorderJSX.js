import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { navigate } from 'gatsby';
import React from 'react'
import { countryPageFontProps } from '../styles/theme';


function useBorderJSX([borders, countryNodes]) {
  const isBordering = borders?.length ? true : false;


  if (!isBordering) return <Typography variant="body2" component='span' sx={countryPageFontProps}>
    n/a
  </Typography>


  return borders.map(shortHandCountryName => {
    const countryString = countryNodes
      .filter(country => shortHandCountryName === country.cca3)
    [0].name.common;

    const link = `/${countryString}`

    const handleClick = () => navigate(link);


    return (
      < Chip
        label={countryString}
        component="li"
        onClick={handleClick}
        key={shortHandCountryName}
        clickable
      />
    )
  });
};

export default useBorderJSX;