
  
  const path = require("path");
  const resolve = dir => path.join(__dirname, dir);
  
  module.exports = {
    presets: [
      '@vue/cli-plugin-babel/preset'
    ],
    baseUrl: "./",
    runtimeCompiler: true,
    chainWebpack: config => {
      config.resolve.alias.set("@", resolve("src"));
    }
  }


