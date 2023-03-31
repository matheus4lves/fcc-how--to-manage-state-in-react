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
exports.devServer = () => ({
  devServer: {
    host: "local-ip",
    hot: true,
    open: true,
    port: 3000,
  },
});

exports.loadCSS = () => ({
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});
