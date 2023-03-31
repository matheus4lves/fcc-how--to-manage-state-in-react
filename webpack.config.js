const path = require("path");
const { merge } = require("webpack-merge");
const parts = require("./webpack.parts");

const commonConfig = merge([
  {
    entry: "./src/index.jsx",
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
