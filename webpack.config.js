const path = require('path');

module.exports = {
  mode: "production",
  //target: "web",
  entry: "./index.js",
  output: {
    filename: 'index.min.js',
    path: path.resolve(__dirname, './'),
    library: "$"
  }
};