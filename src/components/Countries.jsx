import { Grid } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import CountryCard from './CountryCard';

function Countries({ region: regionState, nameSearch }) {
  const data = useStaticQuery(graphql`
    query allCountries {
      allInternalCountries {
        nodes {
          capital
          flags {
            svg
          }
          name {
            common
          }
          population
          region
        }
      }
    }
  `);

  const countries = data?.allInternalCountries?.nodes
    ?.filter(({ name }) => name !== null)
    .filter(({ region }) => {
      if (regionState === undefined || regionState === '') return region;
      return region === regionState;
    })
    .filter(({ name }) => {
      if (nameSearch === undefined || nameSearch === '') return name;
      return name.common.toLowerCase().includes(nameSearch.toLowerCase());
    })
    .map((each) => (
      <Grid
        item
        key={each.name?.common}
        xs={12}
        sm={6}
        md={4}
        lg={3}
        xl={3}
        children={<CountryCard data={each} />}
      />
    ));

  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 6, md: 8, lg: 7, xl: 10 }}
      sx={{
        p: { xs: 4, sm: 6, md: 8, lg: 7, xl: 10 },
        alignItems: 'stretch',
      }}
    >
      {countries}
    </Grid>
  );
}

export default Countries;
