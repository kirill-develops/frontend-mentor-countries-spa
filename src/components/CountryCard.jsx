import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

function CountryCard({ data }) {
  return (
    <Card>
      <CardMedia
        image={data?.flags?.svg}
        alt={`${data?.name?.common} flag`}
        sx={{ aspectRatio: '3/2' }}
      />
      <CardHeader title={data?.name?.common} />
      <CardContent>
        <Typography>
          Population: <Typography>{data?.population}</Typography>
        </Typography>
        <Typography>
          Region: <Typography>{data?.region}</Typography>
        </Typography>
        <Typography>
          Capital: <Typography>{data?.capital}</Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CountryCard;
