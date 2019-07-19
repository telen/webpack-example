const colors = require('colors');

module.exports = class DemoPlugin {
  constructor (options) {
    this.options = options
  }

  apply(compiler) {
    // console.log(colors.bold.inverse(compiler));
    // compiler.plugin('emit', (compilation, callback) => {
    //   console.log(colors.inverse(this.options.title, '在这里可以访问 compilation'));
    //   // console.log(compilation.chunks)
    //   callback();
    // });
    // console.log(compiler)

    // webpack 4 hooks 写法
    compiler.hooks.afterPlugins.tap('DemoPlugin', (compiler) => {
      console.log(arguments);

    });

    // // tapPromise
    // compiler.hooks.emit.tapPromise('DemoPlugin', compilation => {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(function() {
    //       console.log('Donw whith tapPromise work...'.red);
    //       resolve();
    //     }, 1000);
    //   });
    // });

    // // tapAsync
    // compiler.hooks.emit.tapAsync('DemoPlugin', (compilation, callback) => {
    //   setTimeout(function() {
    //     console.log('Done with async work ...'.yellow);
    //     callback();
    //   }, 1000);
    // });
    
  }
}