import { CardMedia, Chip, Grid, Stack, ThemeProvider, Typography } from '@mui/material';
import { graphql } from 'gatsby';
import React, { useState } from 'react';
import Header from '../components/Header';
import { darkTheme, lightTheme } from '../styles/theme';

function Country({ data }) {
  const [themeMode, setThemeMode] = useState('dark');

  const { borders, capital, currencies, flags, languages, name, population, region, subregion, tld } = data.allInternalCountries.edges[0].node;

  const filteredCurrencies = Object.entries(currencies).reduce((arr, [key, value]) => (value ? (arr[key] = value, arr) : arr), {});
  const currencyArr = Object.values(filteredCurrencies);
  const currencyJSX = currencyArr.map(each =>
    <Typography component='span' key={each.name}>{each.name}</Typography>
  );

  const filteredLanguages = Object.entries(languages).reduce((arr, [key, value]) => (value ? (arr[key] = value, arr) : arr), {});
  const languageArr = Object.values(filteredLanguages);
  const languageJSX = languageArr.map(each =>
    <Typography component='span' key={each}>{each}</Typography>
  );

  const isBordering = borders?.length ? true : false;
  const borderJSX = isBordering ? borders.map(each => <Chip label={each} component="li" key={each} />) : <Typography>n/a</Typography>

  return (
    <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
      <Stack as='main'
        direction='column'
        sx={{ backgroundColor: 'background.default', minHeight: "100vh", height: '100%' }}
      >
        <Header themeMode={themeMode} setThemeMode={setThemeMode} />
        {/* make back button */}
        <Stack direction={{ xs: "column", md: 'row' }} spacing={{ xs: 4, md: 16 }}
          sx={{ p: 4, m: 'auto' }}
        >
          <CardMedia component='img' src={flags.svg} sx={{ width: { md: '40%' }, aspectRatio: '3/2', mx: { xs: 'auto', md: "initial" } }} />
          <Stack direction='column' sx={{ color: 'text.primary' }}>
            <Typography>{name.common}</Typography>
            <Typography>Native Name:{" "}
              <Typography component='span'>{name.official}</Typography>
            </Typography>
            <Typography>Population:{" "}
              <Typography component='span'>{population}</Typography>
            </Typography>
            <Typography>Region:{" "}
              <Typography component='span'>{region}</Typography>
            </Typography>
            <Typography>Sub Region:{" "}
              <Typography component='span'>{subregion}</Typography>
            </Typography>
            <Typography>capital:{" "}
              <Typography component='span'>{capital}</Typography>
            </Typography>
            <Typography>Top Level Domain:{" "}
              <Typography component='span'>{tld}</Typography>
            </Typography>
            <Typography>Currencies:{" "}
              {currencyJSX}
            </Typography>
            <Typography>Languages:{" "}
              {languageJSX}
            </Typography>
            <Grid component='ul' sx={{ p: 0 }} columns={9} container>
              <Grid item xs={9} md={4}>
                <Typography sx={{ flexGrow: '1' }}>Border Countries:{" "}</Typography>
              </Grid>
              <Grid md={5} sx={{ alignSelf: 'center' }} item>
                {borderJSX}
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider >
  )
};

export default Country;

// export const Head = ({ data }) => {
//   const { name } = data.allInternalCountries.edges[0].node;
//   return <title>{name} Page</title>
// };

export const data = graphql`
    query ($countryName: String!) {
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