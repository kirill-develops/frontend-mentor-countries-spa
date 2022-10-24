import React, { useState } from "react"
import Countries from "../components/Countries";
import Layout from "../components/Layout";


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
      <Countries region={region} nameSearch={search} />
    </Layout>

  )
};

export default IndexPage;

// export const Head = () => <title>Home Page</title>;