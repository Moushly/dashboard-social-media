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

// if (process.env.NODE_ENV === 'production') {
//   mode = 'production';
//   // Temporary workaround for 'browserslist' bug that is being patched in the near future
//   target = 'browserslist';
// }

/* 
  if (process.env.SERVE) {
    // We only want React Hot Reloading in serve mode
    plugins.push(new ReactRefreshWebpackPlugin());
  }
  */

module.exports = {
  // mode defaults to 'production' if not set
  mode: mode,
  entry: {
    main: path.resolve(__dirname, 'src/js/app.js'),
  },
  // This is unnecessary in Webpack 5, because it's the default.
  // However, react-refresh-webpack-plugin can't find the entry without it.
  //   entry: './src/index.js',

  output: {
    // output path is required for `clean-webpack-plugin`
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    // this places all images processed in an image folder
    // assetModuleFilename: 'images/[hash][ext][query]',
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
        use: [
          //   {
          //     loader: MiniCssExtractPlugin.loader,
          //     // This is required for asset imports in CSS, such as url()
          //     options: { publicPath: '' },
          //   },
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
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
