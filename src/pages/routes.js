// code splitting with require.ensure
// https://gist.github.com/mxstbr/85b1c37276162b6ceb33

// Error: The root route must render a single element #2779
// To avoid this, use .default statement
// https://github.com/reactjs/react-router/issues/2779

import App from '../containers/App';

// function errorLoading(err) {
// 	console.error('Dynamic page loading failed', err);
// }

// function loadRoute(cb) {
// 	return (module) => cb(null, module.default);
// }

export default {
	path: '/',
	component: App,

	childRoutes: [{
		path: 'home',
		getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('./Home').default);
			}, 'HomePage');
		}
	}, {
		path: 'blog',
		getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('./Blog').default);
			}, 'BlogPage');
		}
	}]
};
