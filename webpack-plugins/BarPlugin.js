
module.exports = class Bar {
  apply(compiler) {
    // 监听 Foo 插件的自定义事件
    compiler.hooks.Plugin1Hook.tap('Bar', params => {
      // 简单地输出注入的参数
      console.log(params);
    })
  }
}
