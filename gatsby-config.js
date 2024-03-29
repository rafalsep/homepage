const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Rafal Szczepankiewicz Homepage`,
    siteUrl: `https://www.rafalsep.com`,
    twitterUsername: '@rafalsep',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `test2`,
        path: path.join(__dirname, `src`, `pages`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rafal Szczepankiewicz Homepage`,
        short_name: `rafalsep homepage`,
        description: `This is personal homepage of Rafal Szczepankiewicz`,
        lang: `en`,
        display: `standalone`,
        start_url: `/`,
        background_color: `#18181b`,
        theme_color: `#84cc16`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@shared': path.resolve(__dirname, 'src/shared'),
          '@images': path.resolve(__dirname, 'src/images'),
        },
        extensions: ['js'],
      },
    },
    'gatsby-plugin-react-helmet',
  ],
};
