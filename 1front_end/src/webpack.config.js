// webpack.config.js

module.exports = {
  // other webpack configurations

  resolve: {
    fallback: {
      zlib: require.resolve("browserify-zlib"),
      querystring: require.resolve("querystring-es3"),
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      http: require.resolve("stream-http"),
      net: false, // no polyfill needed for net module
      fs: false, // no polyfill needed for fs module
      url: require.resolve("url/"),
      buffer: require.resolve("buffer/"),
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
    },
  },

  // other webpack configurations
};
