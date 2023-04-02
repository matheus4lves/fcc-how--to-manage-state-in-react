const path = require("path");
const { merge } = require("webpack-merge");
const parts = require("./webpack.parts");

const commonConfig = merge([
  {
    /* We should define the context that webpack will use to look for entry points
    and loaders. By default, the current working directory of Node.js is used, but
    it's recommended to pass a value in your configuration. */
    context: path.resolve(__dirname, "src"),
    // Requests that should resolve in the current directory need to start with './'
    entry: "./index.jsx",
  },
  {
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "bundle.js",
    },
  },
  parts.page(),
  parts.loadJavaScript(),
  parts.loadCSS(),
]);

const configs = {
  development: merge([parts.devServer()]),
  production: {},
};

module.exports = (_, argv) => merge(commonConfig, configs[argv.mode], { mode: argv.mode });
