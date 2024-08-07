const path = require('path');

module.exports = {
  entry: './src/Vanillanote.js',
  output: {
    filename: 'Vanillanote.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Vanillanote',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  mode: 'production'
};
