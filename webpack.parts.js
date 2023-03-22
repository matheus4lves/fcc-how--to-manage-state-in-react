const HtmlWebpackPlugin = require("html-webpack-plugin");

// Generate index.html
exports.page = () => ({
  plugins: [new HtmlWebpackPlugin()],
});

// Babel
exports.loadJavaScript = () => ({
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
});

// Development server
exports.devServer = () => ({});
