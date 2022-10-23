import { Stack, ThemeProvider } from "@mui/material"
import React, { useState } from "react"
import Countries from "../components/Countries";
import Header from "../components/Header";
import SearchHeader from "../components/SearchHeader/SearchHeader";
import { darkTheme, lightTheme } from "../styles/theme";


const IndexPage = () => {
  const [region, setRegion] = useState('');
  const [search, setSearch] = useState('');
  const [themeMode, setThemeMode] = useState('dark');
  const isDark = themeMode === 'dark';

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Stack as='main'
        direction='column'
        sx={{ backgroundColor: 'background.default', minHeight: "100vh" }}
      >
        <Stack
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            flexDirection: 'column',
            gap: 3,
            pb: 3
          }}
          backgroundColor={
            isDark
              ? darkTheme.palette.background.default
              : lightTheme.palette.background.default
          }
        >
          <Header themeMode={themeMode} setThemeMode={setThemeMode} />
          <SearchHeader
            search={search}
            setSearch={setSearch}
            setRegion={setRegion} />
        </Stack>
        <Countries region={region} nameSearch={search} />
      </Stack>
    </ThemeProvider >
  )
};

export default IndexPage;

// export const Head = () => <title>Home Page</title>;