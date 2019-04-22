// This file configures webpack to run on the production files
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  cache: true,
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: 'js/app.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['env', 'react', 'stage-2'],
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader']
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
