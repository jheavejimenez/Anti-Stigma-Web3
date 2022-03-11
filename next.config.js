const withLess = require("next-with-less");

module.exports = withLess({
  lessLoaderOptions: {},
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
})
