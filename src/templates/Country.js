import { Box, Chip, Stack, Typography } from '@mui/material';
import { graphql, navigate } from 'gatsby';
import Image from 'mui-image';
import React, { useMemo } from 'react';
import BackButton from '../components/BackButton';
import Layout from '../components/Layout';
import { mainStyleProps } from '../styles/theme';


const fontProps = {
  fontSize: 16
}

const descriptorFontProps = {
  ...fontProps,
  fontWeight: 600,
}

const titleFontProps = {
  fontSize: 26,
  fontWeight: 800,
}

function Country({ data }) {
  const { borders, capital, currencies, flags, languages, name, population, region, subregion, tld } = useMemo(() =>
    data.allInternalCountries.edges[0].node
    , [data.allInternalCountries]);


  const currencyJSX = useMemo(() => {
    if (!currencies?.length) return (
      <Typography variant="body2" component='span' sx={fontProps}>n/a</Typography>
    );

    const filteredCurrencies = Object.entries(currencies).reduce((arr, [key, value]) => (value ? (arr[key] = value, arr) : arr), {});

    const currencyArr = Object.values(filteredCurrencies);

    return currencyArr.map(currency =>
      <Typography variant="body2" component='span' sx={fontProps} key={currency.name}>
        {currency.name}
      </Typography>
    )
  }, [currencies]);


  const filteredLanguages = useMemo(() =>
    Object.entries(languages).reduce((arr, [key, value]) =>
      (value ? (arr[key] = value, arr) : arr), {})
    , [languages]);

  const languageArr = useMemo(() =>
    Object.values(filteredLanguages)
    , [filteredLanguages]);

  const languageJSX = useMemo(() =>
    languageArr.map((language, i) => {
      const isLast = i === languageArr.length - 1 ? true : false;
      return <Typography
        variant="body2"
        component='span'
        sx={fontProps}
        key={language}
      >
        {language}{isLast ? '' : `,${' '}`}
      </Typography>
    }
    ), [languageArr]);


  const isBordering = useMemo(() =>
    borders?.length ? true : false
    , [borders]);

  const BorderLinks = useMemo(() =>
    isBordering && borders.map(shortHandCountryName => {
      const allCountries = data.allCountries.nodes;

      const countryString = allCountries
        .filter(country => shortHandCountryName === country.cca3)
      [0].name.common;

      const link = `/${countryString}`

      const handleClick = () => navigate(link);

      return (
        < Chip
          label={countryString}
          component="li"
          onClick={handleClick}
          key={shortHandCountryName}
          clickable
        />
      )
    }), [isBordering, borders, data.allCountries.nodes]);

  const borderJSX = useMemo(() =>
    isBordering
      ? BorderLinks
      : <Typography variant="body2" component='span' sx={fontProps}>
        n/a
      </Typography>
    , [isBordering, BorderLinks])


  return (
    <Layout>
      <Stack as='main'
        direction='column'
        sx={mainStyleProps}
      >
        <BackButton />
        <Stack direction={{ xs: "column", md: 'row' }}
          spacing={{ xs: 4, md: 6, lg: 12 }}
          sx={{ px: 4, pb: { xs: 10, md: 20 }, justifyContent: "space-evenly", my: { md: 'auto' } }}
        >
          <Box sx={{
            width: { md: '50%' },
            mx: { xs: 'auto', md: "initial" }
          }}>

            <Image
              src={flags.svg}
              alt={`${name}'s flag`}
              shift="right"
              fit='contain'
              sx={{
                maxHeight: { md: "50vh" },
                aspectRatio: "3 / 2",
              }}
            />
          </Box>
          {/* // * COUNTRY INFO */}
          <Stack direction='column' sx={{
            color: 'text.primary',
            width: { md: '50%' },
            gap: 4,
            justifyContent: "space-evenly"
          }}>
            <Typography variant='h2' sx={titleFontProps}>
              {name.common}
            </Typography>

            {/* // * COUNTRY DETAILS */}
            <Stack
              direction={{ sm: 'column', md: 'row' }}
              sx={{ gap: 4 }}
            >
              <Stack gap={1}>
                <Typography variant='h6' sx={descriptorFontProps}>
                  Native Name:{" "}
                  <Typography
                    variant="body2"
                    component='span'
                    sx={fontProps}
                  >
                    {name.official}
                  </Typography>
                </Typography>
                <Typography
                  variant='h6'
                  sx={descriptorFontProps}
                >
                  Population:{" "}
                  <Typography variant="body2" component='span' sx={fontProps}>
                    {population.toLocaleString("en-US")}
                  </Typography>
                </Typography>
                <Typography
                  variant='h6'
                  sx={descriptorFontProps}
                >
                  Region:{" "}
                  <Typography variant="body2" component='span' sx={fontProps}>
                    {region || 'n/a'}
                  </Typography>
                </Typography >
                <Typography
                  variant='h6'
                  sx={descriptorFontProps}
                >
                  Sub Region:{" "}
                  <Typography variant="body2" component='span' sx={fontProps}>
                    {subregion || 'n/a'}
                  </Typography>
                </Typography>
                <Typography variant='h6' sx={descriptorFontProps}>
                  Capital:{" "}
                  <Typography variant="body2" component='span' sx={fontProps}>
                    {capital || 'n/a'}
                  </Typography>
                </Typography>
              </Stack>
              <Stack gap={1}>
                <Typography variant='h6' sx={descriptorFontProps}>
                  Top Level Domain:{" "}
                  <Typography variant="body2" component='span' sx={fontProps}>
                    {tld || 'n/a'}
                  </Typography>
                </Typography>
                <Typography variant='h6' sx={descriptorFontProps}>
                  Currencies:{" "}
                  {currencyJSX}
                </Typography>
                <Typography variant='h6' sx={descriptorFontProps}>
                  Languages:{" "}
                  {languageJSX}
                </Typography>
              </Stack>
            </Stack>

            {/* // * BORDER COUNTRIES  */}
            <Stack direction={{ md: "row" }} gap={{ xs: 1, md: 2 }}>
              <Typography variant='h6' sx={{ ...descriptorFontProps }}>
                Border Countries:{" "}
              </Typography>
              <Stack direction='row' gap={1} flexWrap='wrap'>{borderJSX}</Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  )
};

export default Country;

// export const Head = ({ data }) => {
//   const { name } = data.allInternalCountries.edges[0].node;
//   return <title>{name} Page</title>
// };

export const data = graphql`
    query ($countryName: String!) {
  allCountries: allInternalCountries {
    nodes {
      cca3
      name {
        common
      }
    }
  }


  allInternalCountries(filter: {name: {common: {eq: $countryName}}}) {
    edges {
      node {
        name {
          official
     common
        }      
        population
        region
        subregion
        capital
        tld
        flags {
          svg
        }
        languages {
           nld
          rus
          eng
          ton
          tuk
          fij
          hif
          ara
          deu
          tgk
          glv
          fra
          hmo
          tpi
          swa
          hye
          nep
          spa
          ber
          kon
          lin
          lua
          lav
          bar
          por
          hat
          tir
          hun
          pov
          bos
          hrv
          srp
          som
          mlt
          ind
          nau
          kor
          afr
          her
          hgm
          kwn
          loz
          ndo
          tsn
          smo
          zho
          pap
          kir
          arc
          ckb
          isl
          urd
          kat
          zdj
          ron
          est
          ssw
          dan
          fao
          mkd
          tkl
          nfr
          tha
          bul
          nrf
          sqi
          mah
          bis
          ltz
          cha
          jpn
          dzo
          crs
          mlg
          bel
          niu
          mya
          gsw
          ita
          roh
          sag
          slv
          khm
          ell
          tur
          mfe
          lat
          bjz
          fil
          tet
          grn
          nor
          vie
          hin
          tam
          kal
          msa
          cal
          pau
          ben
          ces
          slk
          uzb
          tvl
          sot
          lit
          amh
          mon
          swe
          sin
          bwg
          kck
          khi
          ndc
          nde
          nya
          sna
          toi
          tso
          ven
          xho
          zib
          nbl
          nso
          zul
          run
          aze
          fas
          pol
          fin
          gil
          kaz
          prs
          pus
          nno
          nob
          smi
          cnr
          kin
          gle
          lao
          aym
          que
          pih
          heb
          mey
          div
          rar
          ukr
          jam
          cat
          mri
          nzs
        }
        borders
        currencies {
          EUR {
            name
          }
          AED {
            name
          }
          AFN {
            name
          }
          ALL {
            name
          }
          AMD {
            name
          }
          ANG {
            name
          }
          AOA {
            name
          }
          ARS {
            name
          }
          AWG {
            name
          }
          AUD {
            name
          }
          AZN {
            name
          }
          BAM {
            name
          }
          BBD {
            name
          }
          BDT {
            name
          }
          BGN {
            name
          }
          ZWL {
            name
          }
          ZMW {
            name
          }
          ZAR {
            name
          }
          YER {
            name
          }
          XOF {
            name
          }
          XPF {
            name
          }
          XCD {
            name
          }
          XAF {
            name
          }
          WST {
            name
          }
          VUV {
            name
          }
          VND {
            name
          }
          VES {
            name
          }
          UZS {
            name
          }
          BHD {
            name
          }
          BIF {
            name
          }
          BMD {
            name
          }
          BND {
            name
          }
          BOB {
            name
          }
          BRL {
            name
          }
          BSD {
            name
          }
          BTN {
            name
          }
          BWP {
            name
          }
          BYN {
            name
          }
          BZD {
            name
          }
          CAD {
            name
          }
          CDF {
            name
          }
          CHF {
            name
          }
          CKD {
            name
          }
          CLP {
            name
          }
          CNY {
            name
          }
          COP {
            name
          }
          CRC {
            name
          }
          CUC {
            name
          }
          CUP {
            name
          }
          CVE {
            name
          }
          CZK {
            name
          }
          DJF {
            name
          }
          DOP {
            name
          }
          DKK {
            name
          }
          DZD {
            name
          }
          EGP {
            name
          }
          ERN {
            name
          }
          ETB {
            name
          }
          FJD {
            name
          }
          FKP {
            name
          }
          FOK {
            name
          }
          GBP {
            name
          }
          GEL {
            name
          }
          GGP {
            name
          }
          GHS {
            name
          }
          GIP {
            name
          }
          GMD {
            name
          }
          GNF {
            name
          }
          GTQ {
            name
          }
          GYD {
            name
          }
          HKD {
            name
          }
          HNL {
            name
          }
          HRK {
            name
          }
          HTG {
            name
          }
          IDR {
            name
          }
          HUF {
            name
          }
          ILS {
            name
          }
          IMP {
            name
          }
          INR {
            name
          }
          IQD {
            name
          }
          IRR {
            name
          }
          ISK {
            name
          }
          JEP {
            name
          }
          JMD {
            name
          }
          JOD {
            name
          }
          JPY {
            name
          }
          KES {
            name
          }
          KGS {
            name
          }
          KHR {
            name
          }
          KID {
            name
          }
          KMF {
            name
          }
          KPW {
            name
          }
          KRW {
            name
          }
          KWD {
            name
          }
          KYD {
            name
          }
          KZT {
            name
          }
          LAK {
            name
          }
          LBP {
            name
          }
          LKR {
            name
          }
          LRD {
            name
          }
          LSL {
            name
          }
          LYD {
            name
          }
          MAD {
            name
          }
          MDL {
            name
          }
          MGA {
            name
          }
          MKD {
            name
          }
          MMK {
            name
          }
          MNT {
            name
          }
          MOP {
            name
          }
          MRU {
            name
          }
          MUR {
            name
          }
          MVR {
            name
          }
          MWK {
            name
          }
          MXN {
            name
          }
          MYR {
            name
          }
          MZN {
            name
          }
          NAD {
            name
          }
          NGN {
            name
          }
          NIO {
            name
          }
          NOK {
            name
          }
          NPR {
            name
          }
          NZD {
            name
          }
          OMR {
            name
          }
          PAB {
            name
          }
          PEN {
            name
          }
          PGK {
            name
          }
          PHP {
            name
          }
          PKR {
            name
          }
          PLN {
            name
          }
          PYG {
            name
          }
          QAR {
            name
          }
          RON {
            name
          }
          RSD {
            name
          }
          RUB {
            name
          }
          RWF {
            name
          }
          SAR {
            name
          }
          SBD {
            name
          }
          SCR {
            name
          }
          SDG {
            name
          }
          SEK {
            name
          }
          SGD {
            name
          }
          SHP {
            name
          }
          SLL {
            name
          }
          SOS {
            name
          }
          SRD {
            name
          }
          SSP {
            name
          }
          STN {
            name
          }
          SYP {
            name
          }
          SZL {
            name
          }
          THB {
            name
          }
          TMT {
            name
          }
          TJS {
            name
          }
          TND {
            name
          }
          TOP {
            name
          }
          TRY {
            name
          }
          TTD {
            name
          }
          TVD {
            name
          }
          TWD {
            name
          }
          TZS {
            name
          }
          UAH {
            name
          }
          UGX {
            name
          }
          USD {
            name
          }
          UYU {
            name
          }
        }
      }
    }
  }
}
`;