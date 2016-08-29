// refs: https://github.com/tanaka0325/react-skeleton

// NOTE: 予想以上にbabel関連、webpack関連のconfigの量があるので、それを全部ここで再実装するのは気が引ける。
// create-react-appのバージョンアップによって、configが変わっていく可能性が高いので…
// やるなら、node側は最低限の設定のみ書く感じか。
// https://github.com/facebookincubator/create-react-app/tree/master/config
// https://github.com/facebookincubator/create-react-app/blob/master/package.json

const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

const serverRootPath = __dirname + '/../server';
const serverBuildPath = serverRootPath + '/build';
const outputFileName = 'server.bundle.js';

module.exports = {
	name: 'server',
	entry: serverRootPath + '/app.js',
	target: 'node',
	externals: [nodeExternals()],
	output: {
		path: serverBuildPath,
		filename: outputFileName,
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
			query: require('./babel')
		}, {
			test: /\.json$/,
			loader: 'json-loader',
		}]
	},
	plugins: [
		new WebpackShellPlugin({
			// This causes scripts to execute once. Useful for running HMR on webpack-dev-server or webpack watch mode.
			dev: false,
			onBuildStart: [],
			onBuildEnd: [__dirname + '/pm2_restart.sh ' + serverBuildPath + '/' + outputFileName]
		})
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
}
