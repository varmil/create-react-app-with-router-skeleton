import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import rootRoute from './pages/routes';
// import Home from './pages/Home';
// import Blog from './pages/Blog';
import './index.css';

// NOTE: hashHistory uses the hash (#) portion of the URL, creating routes that look like example.com/#/some/path.

ReactDOM.render(
	<Router history={browserHistory} routes={rootRoute} />,
	document.getElementById('root')
);




// ReactDOM.render((
//   <Router history={browserHistory}>
//     <Route
//       path="/home"
//       getComponent={(location, callback) => {
//         require.ensure([], function (require) {
//           callback(null, require('./pages/Home').default);
//         });
//       }}
//     />
//     <Route
//       path="/blog"
//       getComponent={(location, callback) => {
//         require.ensure([], function (require) {
//           callback(null, require('./pages/Blog').default);
//         });
//       }}
//     />
//   </Router>
// 	),
// 	document.getElementById('root')
// );

	// <Router history={browserHistory}>
	// 	<Route path="/home" component={Home} />
	// 	<Route path="/blog" component={Blog} />
	// </Router>
