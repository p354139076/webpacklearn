module.exports={
    entry:__dirname+"/app/Greeter.js",
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