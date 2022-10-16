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
                family: `Lato`,
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
        name: `posts`,
        allowCache: true,
        maxCacheDurationSeconds: 60 * 60 * 24,
      }
    }
  ]
};