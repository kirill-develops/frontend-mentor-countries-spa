import { Typography } from '@mui/material';
import React from 'react'
import { countryPageFontProps } from '../styles/theme';

function useLanguageJSX(languages) {
  if (languages === null) return (
    <Typography variant="body2" component='span' sx={countryPageFontProps}>n/a</Typography>
  );


  const filteredLanguages = Object.entries(languages).reduce((arr, [key, value]) =>
    (value ? (arr[key] = value, arr) : arr), {});

  const languageArr = Object.values(filteredLanguages);


  return languageArr.map((language, i) => {
    const isLast = i === languageArr.length - 1 ? true : false;

    return <Typography variant="body2" component='span' sx={countryPageFontProps} key={language}>
      {language}{isLast ? '' : `,${' '}`}
    </Typography>
  });
}

export default useLanguageJSX