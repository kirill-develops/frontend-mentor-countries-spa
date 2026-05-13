import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";
import React, { useMemo } from "react";
import BackButton from "../components/BackButton";
import CountryPageBorders from "../components/CountryPage/Borders";
import CountryPageDetails from "../components/CountryPage/Details";
import CountryPageFlag from "../components/CountryPage/Flag";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

const titleFontProps = {
   fontSize: 26,
   fontWeight: 800,
};

const infoStackProps = {
   color: "text.primary",
   width: { md: "50%" },
   gap: 4,
   justifyContent: "space-evenly",
};

const wrapperStackStyleProps = {
   px: 4,
   pb: { xs: 10, md: 20 },
   justifyContent: "space-evenly",
   my: { md: "auto" },
};

function Country({ data }) {
   const countryData = useMemo(
      () => data.allInternalCountries.edges[0].node,
      [data.allInternalCountries],
   );

   const { borders, flags, name } = useMemo(() => countryData, [countryData]);

   const countryNodes = data.allCountries.nodes;

   return (
      <Layout>
         <BackButton />
         <Stack
            direction={{ xs: "column", md: "row" }}
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
            <meta
               property="og:title"
               content={`${name.common} | Worldwide National Data Center`}
            />
         </Helmet>
      </Layout>
   );
}

export default Country;

export const query = graphql`
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
               languages
               borders
               currencies
            }
         }
      }
   }
`;
