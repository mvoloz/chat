import path from 'path';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.config.common';

import { Configuration } from './webpack.config.types';
const config: Configuration = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    hot: true,
    port: 8080,
    contentBase: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      browsers: 'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
};

export default merge(commonConfig, config);
