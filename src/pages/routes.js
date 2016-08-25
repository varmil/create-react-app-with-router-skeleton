// code splitting with require.ensure
// https://gist.github.com/mxstbr/85b1c37276162b6ceb33

// Error: The root route must render a single element #2779
// To avoid this, use .default statement
// https://github.com/reactjs/react-router/issues/2779
// change with babel6
// http://qiita.com/kamijin_fanta/items/e8e5fc750b563152bbcf#commonjs

import App from '../containers/App';

// function errorLoading(err) {
// 	console.error('Dynamic page loading failed', err);
// }

// function loadRoute(cb) {
// 	return (module) => cb(null, module.default);
// }

export default {
	// the root path
	path: '/',
	// the root container
	component: App,

	indexRoute: {
		getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('./Home').default);
			}, 'Home');
		}
	},

	childRoutes: [
		{
			path: 'search',
			getComponent(location, cb) {
				require.ensure([], (require) => {
					cb(null, require('./Search').default);
				}, 'Search');
			}
		}
	]
};
