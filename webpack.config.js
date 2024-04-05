const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    // The `hot` option is to use the webpack-dev-server in combination with the hot module replacement API.
    hot: "only",
  },
  resolve: {
    root: path.resolve("./src/assets"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      title: "Webpack Plugin",
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      { test: /\.json$/, loader: "json-loader" },

      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
