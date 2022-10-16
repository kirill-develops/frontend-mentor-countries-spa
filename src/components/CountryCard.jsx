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
    <Card sx={{ height: '100%' }}>
      <CardMedia
        image={data?.flags?.svg}
        alt={`${data?.name?.common} flag`}
        sx={{ aspectRatio: '3/2' }}
      />
      <CardHeader title={data?.name?.common} />
      <CardContent>
        <Typography>
          Population:{' '}
          <Typography component="span">{data?.population}</Typography>
        </Typography>
        <Typography>
          Region: <Typography component="span">{data?.region}</Typography>
        </Typography>
        <Typography>
          Capital: <Typography component="span">{data?.capital}</Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CountryCard;
