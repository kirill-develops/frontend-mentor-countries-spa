import Grid from '@mui/material/Grid';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import CountryCard from '../components/CountryCard';

function useCountriesData([regionState, nameSearch]) {
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


  const regionSearch = (region) => {
    if (regionState === undefined || regionState === '') return region;

    return region === regionState;
  }


  const textSearch = (name) => {
    if (nameSearch === undefined || nameSearch === '') return name;

    return name.common.toLowerCase().includes(nameSearch.toLowerCase());
  }


  return data?.allInternalCountries?.nodes
    ?.filter(({ name }) => name !== null)
    .filter(({ region }) => regionSearch(region))
    .filter(({ name }) => textSearch(name))
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
}

export default useCountriesData;