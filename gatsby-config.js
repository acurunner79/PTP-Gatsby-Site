const path = require(`path`)

// require("dotenv").config({
//   path: `.env`,
// });

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
console.log('env',process.env.GATSBY_YOUTUBE_APIKEY)

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.pathtradingpartners.com",
    title: "Path Trading Partners",
    description: "Path Trading Partners was started by Mike Arnold and Bob Iaccino with one goal in mind: To remove the fog and mystery of trading and active investing and show the novice and journeyman trader alike that there is a path you can take to trading success. It is not the path most tell you. It is the Path Less Traveled.",
    image: "",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: path.join(__dirname, `src`, `images`), 
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat`,
          `Play`,
          `Gruppo`,
          `Roboto`,
          `Raleway`,
          `Ubuntu`,
          `Poppins`,
          `cursive\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-youtube-v3`,
      options: {
        channelId: ['UCDFTQBiJea-YwAdiB6121aA'],
        // apiKey: process.env.GATSBY_YOUTUBE_APIKEY, 
        apiKey: "AIzaSyC_Nk5v8pQlCJEXhXi-Qe7zy6Qt8mqBPJs",
        // maxVideos: 50 
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Path Trading Partners',
        short_name: 'PTP',
        start_url: '/',
        background_color: '#5C5C5B',
        display: 'standalone',
        icon: 'src/images/PTP-Favicon.png',
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
          // spaceId: process.env.CONTENTFUL_SPACE_ID,
          // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
          // host: process.env.CONTENTFUL_HOST,
          spaceId: "8zr4pkf5x5n7",
          accessToken: "P5ue_3oTut0GeCRYaoDnY0UbGSg0UnZS00deZfRCLnI",
          host: "preview.contentful.com",
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://pathtradingpartners.us11.list-manage.com/subscribe/post?u=4a8d7bcf9a03094f501f72c12&id=400cc4e8bd', 
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
  ],
};
