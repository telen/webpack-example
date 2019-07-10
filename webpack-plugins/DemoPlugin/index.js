const colors = require('colors');

module.exports = class DemoPlugin {
  constructor (options) {
    this.options = options
  }

  apply(compiler) {
    // console.log(colors.bold.inverse(compiler));
    // compiler.plugin('emit', (compilation, callback) => {
    //   console.log(colors.inverse('在这里可以访问 compilation'));
    //   console.log(compilation.chunks)
    //   callback();
    // });

    // webpack 4 hooks 写法
    compiler.hooks.emit.tap('DemoPlgin', (compilation) => {
      console.log(colors.inverse('在这里可以访问 compilation'));
      console.log(compilation.assets)
    })
  }
}