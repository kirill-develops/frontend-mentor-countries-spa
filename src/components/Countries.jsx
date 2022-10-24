import Grid from '@mui/material/Grid';
import React from 'react';
import useCountriesData from '../hooks/useCountriesData';

const gridStyleProps = {
  px: { xs: 4, sm: 6, md: 8, lg: 7, xl: 12 },
  pt: 2,
  pb: { xs: 4, sm: 6, md: 8, lg: 7, xl: 12 },
  alignItems: 'stretch',
};

const gridSpacingProps = { xs: 4, sm: 6, md: 8, lg: 7, xl: 10 };

function Countries({ region: regionState, nameSearch }) {
  const countries = useCountriesData([regionState, nameSearch]);

  return (
    <Grid
      container
      spacing={gridSpacingProps}
      sx={gridStyleProps}
    >
      {countries}
    </Grid>
  );
}

export default Countries;
