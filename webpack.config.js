const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry:__dirname+"/app/main.js",
    mode: 'development',
    output:{
        path:__dirname+"/build",
        filename:"bundel.js"
    },
    devServer:{
        contentBase:"./public",
        historyApiFallback:true,
        inline: true,
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    {
                    loader:"style-loader"   
                    },
                    {
                        loader:"css-loader",         
                        options:{
                            module:true,
                            localdentName:'[name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader:"postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({template:__dirname+'/app/index.tmpl.html'})
    ]
};