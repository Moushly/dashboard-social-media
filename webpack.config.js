const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = 'development'; // Or production
// let target = 'web';
const plugins = [
  //   new CleanWebpackPlugin(),
  //   new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    title: 'Dashboard',
    template: 'src/index.html',
    filename: 'index.html',
  }),
];

module.exports = {
  mode: mode,

  entry: {
    main: path.resolve(__dirname, 'src/js/app.js'),
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'images/[name][hash][ext][query]',
    clean: true,
  },

  devtool: 'source-map',

  // required if using webpack-dev-server
  devServer: {
    port: 5001,
    contentBase: './dist',
    hot: true,
    watchContentBase: true,
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  plugins: plugins,
};
