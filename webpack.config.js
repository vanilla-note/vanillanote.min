const path = require('path');

module.exports = {
  entry: './src/Vanillanote.js', // 소스 파일 경로
  output: {
    filename: 'Vanillanote.1.0.0.js', // 번들링된 파일명
    path: path.resolve(__dirname, 'dist'), // 출력 디렉토리
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
