module.exports = {
  siteMetadata: {
    title: `Frontend Mentor Countries RestAPI Challenge`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "countries-frontend-mentor",
      },
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
    }
  ]
};