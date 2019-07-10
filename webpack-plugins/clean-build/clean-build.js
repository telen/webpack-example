

function CleanBuild(options) {

}

CleanBuild.prototype.apply = function(compiler) {

  // 编译阶段
  compiler.plugin("compile", function(params) {
    console.log("The compiler is starting to compile...");
  });

  // 打包阶段
  compiler.plugin("compilation", function(compilation) {
    console.log("The compiler is starting a new compilation...");

    compilation.plugin("optimize", function() {
      console.log("The compilation is starting to optimize files...");
    });
  });

  // 提取文件阶段
  compiler.plugin("emit", function(compilation, callback) {
    console.log("The compilation is going to emit files...");
    callback();
  });
};

module.exports = CleanBuild;
