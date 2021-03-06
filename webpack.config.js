const path = require('path');

module.exports = {
  entry: {
    main: ['babel-polyfill', './lib/index.js'],
    test: ['babel-polyfill', 'mocha!./test/index.js'],
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '',
    filename: "[name].bundle.js"
  },
  module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react'],
          },
        },
        { test: /\.svg$/, loader: 'svg-url-loader'},
        { test: /\.css$/, loader: 'style!css' },
        { test: /\.scss$/, loader: 'style!css!sass' },
        { test: /\.png$/, loader: "url-loader",
          query: { mimetype: "image/png" }},
      ],
    },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css']
  },
  devtool: 'source-maps'
};
