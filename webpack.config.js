module.exports={
    entry:__dirname+"/app/main.js",
    mode: 'development',
    output:{
        path:__dirname+"/public",
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
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
};