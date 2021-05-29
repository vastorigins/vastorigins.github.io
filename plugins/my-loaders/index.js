module.exports = function (context, options) {
  return {
    name: 'loaders',
    configureWebpack(config, isServer) {
      return {
        resolve: {
          fallback: {
            url: require.resolve('url/'),
          },
        },
      };
    },
  };
};