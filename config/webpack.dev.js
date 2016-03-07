var webpack = require('webpack');
var path = require('path');
var APP_DIR = path.join(__dirname, '..', 'app');
var COMPONENT_DIR = path.join(__dirname, '..', 'component');

module.exports = {
  cache: true,
  debug: true,
  devtool: 'inline-source-map',
  entry: ['./app/index.ts',
          'webpack/hot/dev-server',
          'webpack-dev-server/client?http://localhost:8085/'],
  module: {
    preLoaders: [{
      test: /\.tsx?$/,
      loader: 'tslint',
      include: [APP_DIR,COMPONENT_DIR]
    }],
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['babel', 'ts'],
      include: [APP_DIR,COMPONENT_DIR]
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
    root: [path.resolve('../app'), path.resolve('../component')],
    extensions: ['', '.jsx', '.js', '.tsx', '.ts']
  }
};
