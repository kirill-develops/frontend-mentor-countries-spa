import { Grid } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import CountryCard from './CountryCard';

function Countries() {
  const data = useStaticQuery(graphql`
    query allCountries {
      allInternalPosts {
        nodes {
          flags {
            svg
          }
          capital
          name {
            common
          }
          population
          region
        }
      }
    }
  `);

  const countries = data?.allInternalPosts?.nodes?.map((each) => (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={2}
    >
      <CountryCard
        key={each.name?.common}
        data={each}
      />
    </Grid>
  ));

  return (
    <Grid
      container
      spacing={4}
      sx={{ p: 4 }}
    >
      {countries}
    </Grid>
  );
}

export default Countries;
