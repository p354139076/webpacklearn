module.exports={
    entry:__dirname+"/app/Greeter.js",
    mode: 'development',
    output:{
        path:__dirname+"/public",
        filename:"bundel.js"
    },
    devServer:{
        contentBase:"./public",
        historyApiFallback:true,
        inline: true,
    }
}