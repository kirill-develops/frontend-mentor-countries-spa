// const axios = require('axios');

// const NODE_TYPE = 'CountriesApi'

// manually created nodes in attempt to fix HeadAPI error
// code left for later reference

// exports.sourceNodes = async ({
//   actions,
//   createNodeId,
//   createContentDigest }) => {
//   const { createNode } = actions;
//   const response = await axios("https://restcountries.com/v3.1/all");
//   const { data = [] } = response;


//   data.forEach((node, index) => {
//     createNode({
//       ...node,
//       id: createNodeId(`${NODE_TYPE}-${node.name.common}`),
//       parent: null,
//       children: [],
//       internal: {
//         type: NODE_TYPE,
//         content: JSON.stringify(node),
//         contentDigest: createContentDigest(node)
//       }
//     })
//   })
// }

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
        component: require.resolve("./src/templates/Country.js"),
        context: {
          countryName: countryName,
        },
      })
    })
}
