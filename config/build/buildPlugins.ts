import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MinCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from './types/config';

export function buildPlugins({paths}: BuildOptions):webpack.WebpackPluginInstance[] {

    return [
        new HtmlWebpackPlugin({
          template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MinCssExtractPlugin({
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].css'
        })
      ]
}