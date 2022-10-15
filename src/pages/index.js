import { Box, Button } from "@mui/material"
import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Box p={4}>
        <Button variant="contained">Hello gatsby-theme-material-ui</Button>
      </Box>
    </main>
  )
};

export default IndexPage;

// export const Head = () => <title>Home Page</title>;