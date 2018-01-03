var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var browserSync = new BrowserSyncPlugin({
  server: {
    baseDir: ['public']
  }
});

module.exports = {
  devtool: 'source-map',
  entry: './source/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      { // JavaScript
        test: /\.js$/,
        use: [
          { loader: 'babel-loader' }
        ]
      }
    ]
  },
  plugins: [
    browserSync
  ]
};