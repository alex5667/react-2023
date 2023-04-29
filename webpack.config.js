// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

const cssLoaderOptions = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: '/',
  },
};
const clientConfig = {
  mode: 'production',
  target: 'web',
  entry: './src/index.tsx',
  output: {
    filename: 'client.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [cssLoaderOptions, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: [cssLoaderOptions, 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['node_modules', 'src'],
    alias: {
      'redux/store': resolve(__dirname, 'src/redux/store'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.IS_PRODUCTION': JSON.stringify(isProduction),
      'typeof window': JSON.stringify('object'),
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[name].[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      concatenateModules: true,
    }),
  ],
};

const serverConfig = {
  mode: 'production',
  target: 'node',
  entry: './src/server/server.tsx',
  output: {
    filename: 'server.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [cssLoaderOptions, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: [cssLoaderOptions, 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['node_modules', 'src'],
    alias: {
      'redux/store': resolve(__dirname, 'src/redux/store'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.IS_PRODUCTION': JSON.stringify(isProduction),
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[name].[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      concatenateModules: true,
    }),
  ],
};

module.exports = [clientConfig, serverConfig];
