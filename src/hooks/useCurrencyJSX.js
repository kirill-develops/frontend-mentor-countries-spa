import { Typography } from '@mui/material';
import React from 'react'
import { countryPageFontProps } from '../styles/theme';


function useCurrencyJSX(currencies) {
  if (currencies === null) return (
    <Typography variant="body2" component='span' sx={countryPageFontProps}>n/a</Typography>
  );


  const filteredCurrencies = Object.entries(currencies).reduce((arr, [key, value]) => (value ? (arr[key] = value, arr) : arr), {});

  const currencyArr = Object.values(filteredCurrencies);


  return currencyArr.map(currency =>
    <Typography variant="body2" component='span' sx={countryPageFontProps} key={currency.name}>
      {currency.name}
    </Typography>
  )
}

export default useCurrencyJSX