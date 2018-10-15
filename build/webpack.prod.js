// prod环境专用配置
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: [
          { 
            loader: MiniCssExtractPlugin.loader ,
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: [/src/],
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    })
  ],
});