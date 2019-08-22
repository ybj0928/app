const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[hash].js'
  },
  devServer: {
    port: 8089,
    host: '10.10.10.28',
    open: true,
    contentBase: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          }, {
            loader: 'css-loader'
          }, {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          }, {
            loader: 'css-loader'
          }, {
            loader: 'postcss-loader'
          }, {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_module/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: './img/[hash][name].[ext]'
          }
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: './font/[hash][name].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html'
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/[hash].css'
    })
  ],
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}