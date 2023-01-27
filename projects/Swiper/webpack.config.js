'use strict';

const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');

const webpackConfig = {
  mode: 'development',
  devServer: {
    static: "./dist",
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  entry: {
    app: path.join(__dirname, 'src', 'index.ts')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.min.js'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [require.resolve('style-loader'), require.resolve('css-loader')]
      }
    ]
  }
};

module.exports = webpackConfig;