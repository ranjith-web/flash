const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

var config = {
  context: path.resolve(__dirname, 'client'),
  entry: ['./app/index.jsx', './styling/styles.css'],
  // mode: 'development',
  // devtool: 'source-map',
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: 'css/[name].css'
    }),
    // new BrowserSyncPlugin({
    //   host: 'localhost',
    //   port: '3001',
    //   proxy: 'http://localhost:3000',
    //   files: [
    //     './views',
    //     './routes'
    //   ]
    // }),
    // new HtmlWebpackPlugin({
    //   template: 'html/index.html',
    //   filename: './../views/index.html',
    //   minify: true
    // }),
    // new HtmlWebpackPlugin({
    //   template: 'error.html',
    //   filename: './../views/error.html',
    //   minify: true,
    //   templateParameters: {
    //     status: '<%= err.status %>',
    //     message: '<%= err.message %>'
    //   }
    // })
  ]
}
module.exports = config;


