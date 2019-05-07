const dist = require('path').resolve(__dirname, 'dist');

module.exports = {
	entry: './index.js',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: 'phtml-loader',
						options: {
							plugins: [
								require('@phtml/include'),
								require('@phtml/image-size'),
								require('@phtml/self-closing')
							]
						}
					}
				]
			}
		]
	},
	output: {
		filename: '[name].bundle.js'
	}
};
