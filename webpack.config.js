const webpack = require("webpack");

module.exports = {
    entry: './src/app.ts',
    output: {
        path: '/public/',
        filename: 'app.bundle.js',
},
devServer: {
        inline: true
},
	 module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{ 
				test: /\.ts$/, 
				loader: 'ts-loader' 
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
		  Reflect: 'core-js/es7/reflect'
		})
	]
}