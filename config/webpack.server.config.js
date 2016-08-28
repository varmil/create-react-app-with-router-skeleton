// refs: https://github.com/tanaka0325/react-skeleton

// NOTE: 予想以上にbabel関連、webpack関連のconfigの量があるので、それを全部ここで再実装するのは気が引ける。
// create-react-appのバージョンアップによって、configが変わっていく可能性が高いので…
// やるなら、node側は最低限の設定のみ書く感じか。
// https://github.com/facebookincubator/create-react-app/tree/master/config
// https://github.com/facebookincubator/create-react-app/blob/master/package.json

var nodeExternals = require('webpack-node-externals');

module.exports = {
	name: 'server',
	entry: __dirname + '/server/index.js',
	target: 'node',
	externals: [nodeExternals()],
	output: {
		path: __dirname + '/server',
		filename: 'server.bundle.js',
	},
	node: {
		__filename: true,
		__dirname: true
	},
	// TODO: CSS, img
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				babelrc: false,
				presets: ['latest', 'react']
			}
		}, {
			test: /\.json$/,
			loader: 'json-loader',
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
}
