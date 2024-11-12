import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import StylelintPlugin from 'stylelint-webpack-plugin';
import CompressionWebpackPlugin from 'compression-webpack-plugin';

import { BuildOptions } from './types/config';

export function buildPlugins(
  { paths, isDev }: BuildOptions,
): webpack.WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    !isDev && new CompressionWebpackPlugin({
      algorithm: 'gzip',
      test: /\.(html|js|css|jpg|png|svg)$/,
      threshold: 5120, // 5KB
      minRatio: 0.7,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new webpack.HotModuleReplacementPlugin(),
    isDev && new ReactRefreshWebpackPlugin(),
    new ESLintPlugin({
      overrideConfigFile: paths.eslintConfig,
      context: paths.src,
      configType: 'eslintrc',
      quiet: false,
      extensions: ['.ts', '.tsx'],
    }),
    isDev && new StylelintPlugin({
      context: paths.src,
    }),
  ].filter(Boolean);
}
