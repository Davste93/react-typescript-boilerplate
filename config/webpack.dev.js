var webpack = require('webpack');
var path = require('path');
var APP_DIR = path.join(__dirname, '..', 'app');

module.exports = {
  cache: true,
  debug: true,
  devtool: 'inline-source-map',
  entry: ['./app/index.tsx',
          'webpack/hot/dev-server',
          'webpack-dev-server/client?http://localhost:8085/'],
  module: {
    preLoaders: [{
      test: /\.tsx?$/,
      loader: 'tslint',
      include: APP_DIR
    }],
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['babel', 'ts'],
      include: APP_DIR
    }]
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '..', 'build'),
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    root: [path.resolve('../app')],
    extensions: ['', '.jsx', '.js', '.tsx', '.ts']
  }
};
