exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allInternalCountries {
        nodes {
          name {
            common
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Error loading countries!", reporter.errors)
  }

  result.data.allInternalCountries.nodes
    .filter(({ name }) => name !== null)
    .forEach(node => {
      const countryName = node.name.common
      actions.createPage({
        path: `/${countryName}`,
        component: require.resolve("./src/pages/Country.js"),
        context: {
          countryName: countryName,
        },
      })
    })
}
