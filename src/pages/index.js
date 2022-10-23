import { Stack } from "@mui/material"
import React, { useState } from "react"
import Countries from "../components/Countries";
import Layout from "../components/Layout";
import { mainStyleProps } from "../styles/theme";


const IndexPage = ({ location }) => {
  const [region, setRegion] = useState('');
  const [search, setSearch] = useState('');

  return (
    <Layout
      setRegion={setRegion}
      setSearch={setSearch}
      search={search}
      location={location}
    >
      <Stack as='main' direction='column' sx={mainStyleProps}>
        <Countries region={region} nameSearch={search} />
      </Stack>
    </Layout>

  )
};

export default IndexPage;

// export const Head = () => <title>Home Page</title>;