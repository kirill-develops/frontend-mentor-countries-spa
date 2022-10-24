import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useMemo } from 'react';
import useCurrencyJSX from '../../hooks/useCurrencyJSX';
import useLanguageJSX from '../../hooks/useLanguageJSX';
import { countryPageFontProps, descriptorFontProps } from '../../styles/theme';

function CountryPageDetails({ countryData }) {
  const {
    capital,
    currencies,
    languages,
    name,
    population,
    region,
    subregion,
    tld,
  } = useMemo(() => countryData, [countryData]);

  const currencyJSX = useCurrencyJSX(currencies);

  const languageJSX = useLanguageJSX(languages);

  return (
    <Stack
      direction={{ sm: 'column', md: 'row' }}
      sx={{ gap: 4 }}
    >
      <Stack gap={1}>
        <Typography
          variant="h6"
          sx={descriptorFontProps}
        >
          Native Name:{' '}
          <Typography
            variant="body2"
            component="span"
            sx={countryPageFontProps}
          >
            {name.official}
          </Typography>
        </Typography>
        <Typography
          variant="h6"
          sx={descriptorFontProps}
        >
          Population:{' '}
          <Typography
            variant="body2"
            component="span"
            sx={countryPageFontProps}
          >
            {population.toLocaleString('en-US')}
          </Typography>
        </Typography>
        <Typography
          variant="h6"
          sx={descriptorFontProps}
        >
          Region:{' '}
          <Typography
            variant="body2"
            component="span"
            sx={countryPageFontProps}
          >
            {region || 'n/a'}
          </Typography>
        </Typography>
        <Typography
          variant="h6"
          sx={descriptorFontProps}
        >
          Sub Region:{' '}
          <Typography
            variant="body2"
            component="span"
            sx={countryPageFontProps}
          >
            {subregion || 'n/a'}
          </Typography>
        </Typography>
        <Typography
          variant="h6"
          sx={descriptorFontProps}
        >
          Capital:{' '}
          <Typography
            variant="body2"
            component="span"
            sx={countryPageFontProps}
          >
            {capital || 'n/a'}
          </Typography>
        </Typography>
      </Stack>
      <Stack gap={1}>
        <Typography
          variant="h6"
          sx={descriptorFontProps}
        >
          Top Level Domain:{' '}
          <Typography
            variant="body2"
            component="span"
            sx={countryPageFontProps}
          >
            {tld || 'n/a'}
          </Typography>
        </Typography>
        <Typography
          variant="h6"
          sx={descriptorFontProps}
        >
          Currencies: {currencyJSX}
        </Typography>
        <Typography
          variant="h6"
          sx={descriptorFontProps}
        >
          Languages: {languageJSX}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default CountryPageDetails;
