const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withImages], {
  target: 'serverless',
  trailingSlash: true,
  devIndicators: {
    autoPrerender: false,
  }
});

// I am at risk that the above prevents from normal deployment see https://github.com/serverless-nextjs/serverless-next.js/issues/568
// module.exports = {
//   target: 'serverless',
//   devIndicators: {
//     autoPrerender: false,
//   }
// }
