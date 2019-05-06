const { resolve } = require("path");
const webpack = require("webpack");

module.exports = {
  entry: resolve(__dirname, "src", "index.js"),

  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "public"),
    publicPath: "/"
  },

  context: resolve(__dirname, "src"),

  devtool: "inline-source-maps",

  devServer: {
    contentBase: resolve(__dirname, "public"),
    publicPath: "/",
    historyApiFallback: true
  },

  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       use: ["babel-loader"],
  //       exclude: /node_modules/
  //     }
  //   ]
  // }

  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      loader: 'url-loader?limit=100000' }]
  }
};
