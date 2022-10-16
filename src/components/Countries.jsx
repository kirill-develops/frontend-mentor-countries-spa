import { Grid } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import CountryCard from './CountryCard';

function Countries() {
  const data = useStaticQuery(graphql`
    query allCountries {
      allInternalPosts {
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

  const countries = data?.allInternalPosts?.nodes
    ?.filter(({ name }) => name !== null)
    .map((each) => (
      <Grid
        item
        key={each.name?.common}
        xs={12}
        sm={6}
        md={4}
        lg={3}
        xl={2}
        children={<CountryCard data={each} />}
      />
    ));

  return (
    <Grid
      container
      spacing={4}
      sx={{ p: 4, alignItems: 'stretch' }}
    >
      {countries}
    </Grid>
  );
}

export default Countries;
