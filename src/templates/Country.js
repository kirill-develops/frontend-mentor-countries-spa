import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { graphql } from 'gatsby';
import React, { useMemo } from 'react';
import BackButton from '../components/BackButton';
import CountryPageBorders from '../components/CountryPage/Borders';
import CountryPageDetails from '../components/CountryPage/Details';
import CountryPageFlag from '../components/CountryPage/Flag';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';

const titleFontProps = {
  fontSize: 26,
  fontWeight: 800,
};

const infoStackProps = {
  color: 'text.primary',
  width: { md: '50%' },
  gap: 4,
  justifyContent: 'space-evenly',
};

const wrapperStackStyleProps = {
  px: 4,
  pb: { xs: 10, md: 20 },
  justifyContent: 'space-evenly',
  my: { md: 'auto' },
};

function Country({ data }) {
  const countryData = useMemo(
    () => data.allInternalCountries.edges[0].node,
    [data.allInternalCountries]
  );

  const { borders, flags, name } = useMemo(() => countryData, [countryData]);

  const countryNodes = data.allCountries.nodes;

  return (
    <Layout>
      <BackButton />
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 4, md: 6, lg: 12 }}
        sx={wrapperStackStyleProps}
      >
        <CountryPageFlag
          flag={flags.svg}
          name={name}
        />
        <Stack
          direction="column"
          sx={infoStackProps}
        >
          <Typography
            variant="h2"
            sx={titleFontProps}
          >
            {name.common}
          </Typography>
          <CountryPageDetails countryData={countryData} />
          <CountryPageBorders
            countryNodes={countryNodes}
            borders={borders}
          />
        </Stack>
      </Stack>
      <Helmet>
        <title>{`${name.common}`} | Worldwide National Data Center</title>
        <meta property="og:title" content={`${name.common} | Worldwide National Data Center`} />
      </Helmet>
    </Layout>
  );
}

export default Country;


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

    allInternalCountries(filter: { name: { common: { eq: $countryName } } }) {
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
