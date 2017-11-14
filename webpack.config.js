const webpack = require('webpack');
const { resolve } = require('path');
const root = (...args) => resolve(process.cwd(), ...args);

module.exports = {
  output: {
    path: root('dist'),
    filename: 'bundle.js'
  },
  entry: root('src/index'),
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react'],
            plugins: ['transform-object-rest-spread']
          }
        }
      }
    ]
  }
};
