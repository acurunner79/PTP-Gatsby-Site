const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, "src"), "node_modules"],
        },
    });
};

var axios = require('axios');

var config = {
  method: 'post',
  url: 'https://webhook.gatsbyjs.com/hooks/data_source/publish/779582c8-e31e-4c6f-a433-373388cc21da',
  headers: { 
    'secret_key': process.env.REACT_APP_WEBHOOK_KEY, 
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});