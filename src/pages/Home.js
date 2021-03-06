import React from 'react';
import PageBase from './Base';
import Header from '../components/Header';
import { Paper, RaisedButton } from 'material-ui';
import logo from '../logo.svg';
import './Home.css';

class Home extends PageBase {
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
					<RaisedButton label="Default" />
				</div>

			</div>
		);
	}
}

export default Home;
