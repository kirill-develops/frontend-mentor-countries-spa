const path = require("path");
const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
);

module.exports = {
  siteMetadata: {
    title: `Frontend Mentor Countries RestAPI Challenge`,
    siteUrl: `http://countries-frontend-mentor.s3-website-us-east-1.amazonaws.com/`,
    description: 'Displaying global countries & relevent information by integrating with the REST Countries API to pull country data',
    image: "src/images/globe.svg",
    lang: 'en',
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Frontend Mentor Countries RestAPI Challenge",
        short_name: "Countries RestAPI Challenge FM",
        description: 'Displaying global countries & relevent information by integrating with the REST Countries API to pull country data',
        lang: 'en',
        start_url: "/",
        icon: "src/images/globe.svg",
        theme_color_in_head: false,
        display: 'browser',
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        typePrefix: "internal__",
        url: "https://restcountries.com/v3.1/all",
        method: "get",
        headers: {
          "Content-Type": "application/json"
        },
        name: `countries`,
        allowCache: true,
        maxCacheDurationSeconds: 60 * 60 * 24,
      }
    },
    {
      resolve: "gatsby-theme-material-ui",
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Nunito Sans`,
                variants: [`300`, `600`, `800`],
              },
            ],
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", "bower_components", ".cache", "public"],
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "countries-frontend-mentor",
      },
    },
  ],
  flags: { DEV_SSR: true, }
};