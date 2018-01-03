var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var extractScss = new ExtractTextPlugin({ filename: '[name].css' });
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
      { // SCSS
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true, includePaths: ['./source/sass'] }}
        ]
      },
      { // JavaScript
        test: /\.js$/,
        use: [
          { loader: 'babel-loader' }
        ]
      }
    ]
  },
  plugins: [
    extractScss,
    browserSync
  ]
};