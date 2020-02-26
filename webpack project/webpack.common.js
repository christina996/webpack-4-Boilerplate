module.exports={
    "entry":{
        vendors:"./src/entryScripts/vendors.js",
        index:"./src/entryScripts/index.js"
        },
        module: {
            rules: [
                {
                    test:/\.ts$/,
                    loader:'ts-loader'
                },
                {
                    test:/\.html$/,
                    use:["html-loader"]
                },
            ]}
}