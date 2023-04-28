// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const clientConfig = {
  mode: 'production',
  target: 'web',
  entry: './src/index.tsx',
  output: {
    filename: 'client.bundle.js',
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
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
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
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
};

const serverConfig = {
  mode: 'production',
  target: 'node',
  entry: './src/server/server.tsx',
  output: {
    filename: 'server.bundle.js',
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
        use: 'null-loader',
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
  ],
};

module.exports = [clientConfig, serverConfig];
