import React, { Component } from 'react';
import Header from '../components/Header';
import { Paper, RaisedButton } from 'material-ui';
import logo from '../logo.svg';
import './Home.css';

class Home extends Component {
	render() {
		return (
			<div className="App">
				<Header title="prop: home" />

				<Paper zDepth={1}>
					<h4>First Vertical component</h4>
				</Paper>
				<Paper zDepth={1}>
					<h4>Second Vertical component</h4>
				</Paper>

				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</div>

				<RaisedButton label="Default" />
			</div>
		);
	}
}

export default Home;
