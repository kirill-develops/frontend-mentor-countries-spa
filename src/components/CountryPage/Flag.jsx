import React from 'react';
import Box from '@mui/material/Box';
import Image from 'mui-image';

const flagStypeProps = {
  maxHeight: { md: '50vh' },
  aspectRatio: '3 / 2',
};

function CountryPageFlag({ flag, name }) {
  return (
    <Box sx={{ width: { md: '50%' }, mx: { xs: 'auto', md: 'initial' } }}>
      <Image
        src={flag}
        alt={`${name}'s flag`}
        shift="right"
        fit="contain"
        sx={flagStypeProps}
      />
    </Box>
  );
}

export default CountryPageFlag;
