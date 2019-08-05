const path = require('path');
const DemoPlugin = require('./webpack-plugins/DemoPlugin/index.js');
const BarPlugin = require('./webpack-plugins/BarPlugin.js');

const PATHS = {
  lib: path.join(__dirname, 'app', 'index.js'),
  build: path.join(__dirname, 'build'),
};

module.exports = {
  entry: {
    lib: PATHS.lib,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  plugins: [
    new DemoPlugin({ title: 'Officer1' }),
    new BarPlugin()
  ],
}
