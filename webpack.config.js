const TerserPlugin = require("terser-webpack-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: "/src/index.js",
  },
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.jsx$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      { test: /\.svg$/, use: ["@svgr/webpack"] },
    ],
  },
  output: {
    filename: "./index.js",
    path: __dirname + "/public",
  },
  stats: {
    errorDetails: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  // optimization:{
  //   minimize: true,
  //   minimizer: [new TerserPlugin()]
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      filename: "./index.html",
      // favicon: "./src/assets/favicon.ico",
    }),
    new MiniCssExtractPlugin({
      filename: "./index.css",
    }),
    new CopyPlugin({
      patterns: [{ from: "./src/assets", to: "./assets" }],
    }),
    new InjectManifest({
      swSrc: "./src/sw.js",
      swDest: "sw.js",
    }),
  ],
};
