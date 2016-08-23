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
			require.ensure([], function(require) {
				cb(null, require('./Home'));
			});
		}
	}, {
		path: 'blog',
		getComponent(location, cb) {
			require.ensure([], function(require) {
				cb(null, require('./Blog'));
			});
		}
	}]
};