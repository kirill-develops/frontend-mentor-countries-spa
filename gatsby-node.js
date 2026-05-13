exports.sourceNodes = async ({
   actions,
   createNodeId,
   createContentDigest,
}) => {
   const { createNode } = actions;

   const FIELDS_1 =
      "name,flags,population,region,capital,subregion,currencies,languages,cca3";
   const FIELDS_2 = "cca3,borders,tld";

   const [res1, res2] = await Promise.all([
      fetch(`https://restcountries.com/v3.1/all?fields=${FIELDS_1}`).then((r) =>
         r.json(),
      ),
      fetch(`https://restcountries.com/v3.1/all?fields=${FIELDS_2}`).then((r) =>
         r.json(),
      ),
   ]);

   const supplementMap = res2.reduce((map, c) => {
      map[c.cca3] = c;
      return map;
   }, {});

   res1.forEach((country) => {
      const supplement = supplementMap[country.cca3] || {};
      const node = {
         ...country,
         borders: supplement.borders || [],
         tld: supplement.tld || [],
         id: createNodeId(`internal__countries-${country.cca3}`),
         parent: null,
         children: [],
         internal: {
            type: "internal__countries",
            content: JSON.stringify(country),
            contentDigest: createContentDigest(country),
         },
      };
      createNode(node);
   });
};

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
   `);

   if (result.errors) {
      reporter.panic("Error loading countries!", reporter.errors);
   }

   result.data.allInternalCountries.nodes
      .filter(({ name }) => name !== null)
      .forEach((node) => {
         const countryName = node.name.common;
         actions.createPage({
            path: `/${countryName}`,
            component: require.resolve("./src/templates/Country.js"),
            context: {
               countryName: countryName,
            },
         });
      });
};

exports.createSchemaCustomization = ({ actions }) => {
   const { createTypes } = actions;
   createTypes(`
    type internal__countries implements Node {
      currencies: JSON
      languages: JSON
      borders: [String]
      tld: [String]
    }
  `);
};
