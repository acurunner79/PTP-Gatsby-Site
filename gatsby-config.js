const path = require(`path`)

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
        apiKey: 'AIzaSyC_Nk5v8pQlCJEXhXi-Qe7zy6Qt8mqBPJs', // Optional for public requests
        // maxVideos: 50 // Defaults to 50
      },
    },
    {
      resolve: 'gatsby-plugin-favicons',
      options: {
        logo: './src/images/PTP-Favicon.png'
      }
    },
    // {
    //   resolve: 'gatsby-plugin-mailchimp',
    //   options: {
    //       endpoint: '', // string; add your MC list endpoint here; see instructions below
    //       timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
    //   },
    // },
  ],
};
