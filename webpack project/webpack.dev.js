const path=require('path');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const HtmlWebpackPLugin=require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge=require('webpack-merge');
const common=require('./webpack.common');

module.exports=merge(common,{
    devtool: "source-map",
    mode:"development",
    // output:{
    //     filename:"[name].bundle.js", //hashil al hash a3ml ana hardly load
    //     path:path.resolve(__dirname,"build")
    // },

          // {
          //   test: /\.js$/,
          //   exclude: /node_modules/,
          //   use: {
          //     loader: 'babel-loader',
          //     options: {
          //       presets: ['@babel/preset-env']
          //     }
          //   }
          // },
          
        module: {
          rules: [
          {
              test:/\.(png|jpe|svg|jpg|gif)$/,
              use:[{
                  loader:"file-loader",
                  options:{
                      name:"[name].[hash].[ext]",
                      outputPath:"assets",
                      esModule:false
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
        new HtmlWebpackPLugin({
            template:'./src/index.html',
            favicon:'./src/assets/favicon.ico'
        }),
        new MiniCssExtractPlugin({filename:"[name].[contenthash].css"})
    ]
})
