const path=require('path');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const HtmlWebpackPLugin=require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const merge=require('webpack-merge');
const common=require('./webpack.common');

module.exports=merge(common,{
    devtool: "none",
    mode:"production",

    output:{
        filename:"[name].[hash].bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    optimization: {
        minimizer: [
        new OptimizeCssAssetsPlugin(),
        new TerserPlugin(),
        new HtmlWebpackPLugin({
            template:'./src/index.html',
            favicon:'./src/assets/favicon.ico',
            minify:{
                removeAttributeQuotes:true,
                collapseWhitespace:true,
                removeComments:true
            }
        }),

        ],
      },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
              test:/\.(png|jpe|svg|jpg|gif)$/,
              use:[{
                  loader:"url-loader",
                  options:{
                      limit:"20000",
                      esModule:false,
                      //outputPath:"assets"
                  }
              },
              'image-webpack-loader'
            ]

          },
          {
            test:/\.css$/,
            // loader:["style-loader","css-loader"],
            // test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
            test:/\.scss$/,
            use: [MiniCssExtractPlugin.loader,
                 'css-loader',
                  'sass-loader'
                ]

        }

        ]
      },
      plugins:[
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({filename:"[name].[contenthash].css"})
    ]
})
