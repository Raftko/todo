module.exports = {
    entry: './src/app.js',
    output: {
        path: './assets/js/',
        filename: 'app.bundle.js',
},
	 module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
}