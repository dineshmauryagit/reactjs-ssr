const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Infrom webpack that we're building a bundle
  // for nodeJS, rather then for the browser
  target: 'node',
  
  // Tell webpack the boot file  of our
  // server application
  entry: './src/index.js',
  
  // Tell webpack where to put the out put file
  // that is generated
  output: {
      filename : 'bundle.js',
      path : path.resolve(__dirname, 'build')
  },

  externals : [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);