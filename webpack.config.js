const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("mini-html-webpack-plugin");

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
    })
  ],

  resolve: {
    alias: {
      '@src': path.join(__dirname, '../', 'src'),
    }
  }
}