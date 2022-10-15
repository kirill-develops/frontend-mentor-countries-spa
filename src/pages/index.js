import { Stack } from "@mui/material"
import * as React from "react"
import Countries from "../components/Countries";
import Header from "../components/Header";
import Region from "../components/Region";
import Search from "../components/Search";


const IndexPage = () => {
  return (
    <Stack as='main'
      direction='column'
    >
      <Header />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ justifyContent: { sm: 'space-between' } }}
      >
        <Search />
        <Region />
      </Stack>
      <Countries />
    </Stack>
  )
};

export default IndexPage;

// export const Head = () => <title>Home Page</title>;