import * as React from "react"
import Layout from "../components/Layout"
import Typography from "@mui/material/Typography"
import BackButton from "../components/BackButton"
import Stack from "@mui/material/Stack"

const pageStyles = {
  px: 4.5,
  pb: 30,
}

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}


const NotFoundPage = () => {
  return (
    <Layout>
      <BackButton />
      <Stack direction='column' sx={pageStyles}>
        <Typography variant="h2">Page not found</Typography>
        <Typography varient='body1' >
          <br />
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
        </Typography>
      </Stack>
    </Layout>
  )
}

export default NotFoundPage

// export const Head = () => <title>Not found</title>
