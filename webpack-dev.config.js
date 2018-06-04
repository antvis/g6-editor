const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const resolve = require('path').resolve;
const shelljs = require('shelljs');
const _ = require('lodash');
const pkg = require('./package.json');

const entry = {};

shelljs.ls(resolve(__dirname, 'demos/src')).forEach(demoEntry => {
  if (/\.js$/.test(demoEntry)) {
    const basename = path.basename(demoEntry, '.js');
    const moduleName = _.upperFirst(_.camelCase(basename));
    entry[moduleName] = `./demos/src/${demoEntry}`;
  }
});

module.exports = {
  mode: 'production',
  devtool: 'cheap-source-map',
  entry,
  output: {
    filename: substitutions => `${_.lowerFirst(substitutions.chunk.name)}.js`,
    library: '[name]',
    libraryTarget: 'umd',
    path: resolve(__dirname, 'build/')
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  externals: {
    'react-dom': 'ReactDOM',
    react: 'React'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /global\.js$/,
        use: {
          loader: 'string-replace-loader',
          options: {
            search: '____G6_VERSION____',
            replace: pkg.version
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};
