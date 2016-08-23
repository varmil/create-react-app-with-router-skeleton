import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import rootRoute from './pages/routes';
import Home from './pages/Home';
import Blog from './pages/Blog';
import './index.css';

// ReactDOM.render(
//  	<Router history={browserHistory} routes={rootRoute} />,
// 	document.getElementById('root')
// );

// NOTE: hashHistory uses the hash (#) portion of the URL, creating routes that look like example.com/#/some/path.

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/home" component={Home} />
		<Route path="/blog" component={Blog} />
	</Router>
	),
	document.getElementById('root')
);

