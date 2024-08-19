// const path = require('path');
const webpack = require('webpack')

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  // ... your existing configuration
  Object.assign(fallback, {
    zlib: require.resolve("browserify-zlib"),
    
    querystring: require.resolve("querystring-es3"),
    path: require.resolve("path-browserify"),
    crypto: require.resolve("crypto-browserify"),
    fs: false, // fs is not available in the browser, so set it to false
    stream: require.resolve("stream-browserify"),
    http: require.resolve("stream-http"),
    url: require.resolve("url/"),
    buffer: require.resolve("buffer/"),
    util: require.resolve("util/"),
    "assert": require.resolve("assert/"),
    net: false, // net is not available in the browser, so set it to false

  })
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser"
    })
  ])

  return config;
     

  // You may also need to include other necessary configurations depending on your project
};

