import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useMemo } from 'react';

function CountryCard({ data }) {
  const image = useMemo(() => getImage(data.flags.svg), [data]);
  return (
    <Card>
      <GatsbyImage
        image={image}
        alt={`${data.name.common} flag`}
      />
      <CardHeader title={data.name.common} />
      <CardContent>
        <Typography>
          Population: <Typography>{data.population}</Typography>
        </Typography>
        <Typography>
          Region: <Typography>{data.region}</Typography>
        </Typography>
        <Typography>
          Capital: <Typography>{data.capital}</Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CountryCard;
