// This file configures webpack to run on the production files
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const page = require('./page.json');

module.exports = {
  cache: true,
  entry:<% if (reactRouter) { %> './src/app.js'<% } else { %> page<% } %>,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename:<% if (reactRouter) { %> 'js/app.js'<% } else { %> 'js/[name].js'<% } %>,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass'),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css', {
      allChunks: true,
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
