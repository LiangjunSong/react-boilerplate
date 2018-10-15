// dev环境专用配置
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: [
          { 
            loader: "style-loader",
            options: {
              sourceMap: true,
            },
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
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
});