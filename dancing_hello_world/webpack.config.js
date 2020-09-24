const path = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: { index: path.resolve(__dirname, "js", "main.js") },
    plugins: [
      new HTMLWebPackPlugin({
        template: path.resolve(__dirname, '.', 'index.html')
      })
    ]
  };