import { Stack, ThemeProvider } from "@mui/material"
import React, { useState } from "react"
import Countries from "../components/Countries";
import Header from "../components/Header";
import RegionSelect from "../components/RegionSelect";
import Search from "../components/Search";
import { darkTheme, lightTheme } from "../styles/theme";


const IndexPage = () => {
  const [region, setRegion] = useState();
  const [search, setSearch] = useState();
  const [themeMode, setThemeMode] = useState('dark');

  return (
    <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
      <Stack as='main'
        direction='column'
        sx={{ backgroundColor: 'background.default', minHeight: "100vh" }}
      >
        <Header themeMode={themeMode} setThemeMode={setThemeMode} />
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          sx={{ justifyContent: { sm: 'space-between' } }}
        >
          <Search search={search} setSearch={setSearch} />
          <RegionSelect setRegion={setRegion} />
        </Stack>
        <Countries region={region} nameSearch={search} />
      </Stack>
    </ThemeProvider>
  )
};

export default IndexPage;

// export const Head = () => <title>Home Page</title>;