import { Stack } from "@mui/material"
import React, { useState } from "react"
import Countries from "../components/Countries";
import Header from "../components/Header";
import RegionSelect from "../components/RegionSelect";
import Search from "../components/Search";


const IndexPage = () => {
  const [region, setRegion] = useState();
  const [search, setSearch] = useState();

  return (
    <Stack as='main'
      direction='column'
    >
      <Header />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ justifyContent: { sm: 'space-between' } }}
      >
        <Search search={search} setSearch={setSearch} />
        <RegionSelect setRegion={setRegion} />
      </Stack>
      <Countries region={region} nameSearch={search} />
    </Stack>
  )
};

export default IndexPage;

// export const Head = () => <title>Home Page</title>;