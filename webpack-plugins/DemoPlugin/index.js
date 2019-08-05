const colors = require('colors');

module.exports = class DemoPlugin {
  constructor (options) {
    this.options = options
  }

  apply(compiler) {
    // console.log(colors.bold.inverse(compiler));
    // webpack 4 之前写法
    // compiler.plugin('emit', (compilation, callback) => {
    //   console.log(colors.inverse(this.options.title, '在这里可以访问 compilation'));
    //   // console.log(compilation.chunks)
    //   callback();
    // });
    // console.log(compiler)

    // hooks 写法
    // compiler.hooks.afterPlugins.tap('DemoPlugin', (compiler) => {
    //   console.log(arguments);

    // });

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

    const SyncHook = require('tapable').SyncHook;

    // 在 compiler.hooks 上创建自定义钩子
    // 传入的是一个参数名数组，名字只是为了可读性
    // 重点需要注意数组长度：规定了触发时可以注入几个参数
    compiler.hooks.Plugin1Hook = new SyncHook(['paramName']);

    compiler.hooks.done.tap('Foo', stats => {
      console.log('Compilation has completed.'.red);
      // 在编译完成后触发，注入一个字符串参数
      compiler.hooks.Plugin1Hook.call('> done! <');
    })

  }
}