import React, { useState } from "react"
import Countries from "../components/Countries";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";


const IndexPage = ({ location }) => {
  const [region, setRegion] = useState('');
  const [search, setSearch] = useState('');

  console.log('index.js'); //! delete later
  return (
    <Layout
      setRegion={setRegion}
      setSearch={setSearch}
      search={search}
      location={location}
    >
      <Countries region={region} nameSearch={search} />
      <Helmet>
        <title>Home Page | Worldwide National Data Center</title>
        <meta property="og:title" content='Home Page | Worldwide National Data Center' />
      </Helmet>
    </Layout>
  )
};

export default IndexPage;

