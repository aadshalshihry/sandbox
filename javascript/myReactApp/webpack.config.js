var webpack = require('webpack');

module.exports = {
   devtool: 'inline-source-map',
   entry: [
   // 'webpack-hot-middleware/client',
   // './client/main.js'
   './main.js'
   ],
	
   output: {
      path: require('path').resolve('./dist'),
      filename: 'bundle.js',
      // publicPath:  __dirname
      publicPath:  '/'
   },

	plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
   ],
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react', 'react-hmre']
            }
         }
      ]
   }
}
