import { Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import apiUtils from '../utils/apiUtils';
import CountryCard from './CountryCard';

function Countries() {
  const [countriesJSX, setCountriesJSX] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await apiUtils.getAll();
        const countries = data?.data.map((each) => (
          <CountryCard
            key={each.name.common}
            data={each}
          />
        ));
        setCountriesJSX(countries);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  let content;
  if (error === false && loading === false) content = countriesJSX;
  if (error === true && loading === false)
    content = <Typography>Error fetching data. Try reloading page</Typography>;
  if (loading === true) content = <Typography>Loading</Typography>;

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      sx={{ flexWrap: 'wrap' }}
    >
      {content}
    </Stack>
  );
}

export default Countries;
