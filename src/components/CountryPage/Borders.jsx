import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
import { descriptorFontProps } from '../../styles/theme';
import useBorderJSX from '../../hooks/useBorderJSX';

function CountryPageBorders({ countryNodes, borders }) {
  const borderJSX = useBorderJSX([borders, countryNodes]);

  return (
    <Stack
      direction={{ md: 'row' }}
      gap={{ xs: 1, md: 2 }}
    >
      <Typography
        variant="h6"
        sx={{ ...descriptorFontProps }}
      >
        Border Countries:{' '}
      </Typography>
      <Stack
        direction="row"
        gap={1}
        flexWrap="wrap"
      >
        {borderJSX}
      </Stack>
    </Stack>
  );
}

export default CountryPageBorders;
