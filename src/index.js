import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import rootRoute from './pages/routes';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// NOTE: hashHistory uses the hash (#) portion of the URL, creating routes that look like example.com/#/some/path.

ReactDOM.render(
	<Router history={browserHistory} routes={rootRoute} />,
	document.getElementById('root')
);



// import Home from './pages/Home';
// import Blog from './pages/Blog';
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
