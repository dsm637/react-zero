const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve('./src/index.tsx')
  },
  devServer: {
    publicPath: "/",
    contentBase: "./public",
    port: 3000,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'WPR Boilerplate',
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
