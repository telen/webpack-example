const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const CleanBuild = require('./webpack-plugins/clean-build/clean-build')

module.exports = {
  mode: 'development',

  entry: {
    main: "./src/index.js"
  },

  output: {
    path: path.join(__dirname, 'build'),
    // Capture name from entry using a pattern
    filename: '[name].js'
  },

  devServer: {
    // Display only errors to reduce the amount of output.
    stats: 'none', // string: 'none' | 'errors-only' | 'minimal' | 'normal' | 'verbose' object

    // Parse host and port from env to allow customization.
    //
    // If you use Docker, Vagrant or Cloud9, set
    // host: "0.0.0.0";
    //
    // 0.0.0.0 is available to all network devices
    // unlike default `localhost`
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
    open: false, // Open the page in browser after startup.
  },

  // How to resolve encountered imports
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },

  plugins: [
    new CleanBuild({
      enable: true
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack Example 🤪'
    }),
    new CleanWebpackPlugin(),
  ],

  resolve: {
    alias: {
      '@src': path.join(__dirname, '../', 'src'),
    }
  }
}