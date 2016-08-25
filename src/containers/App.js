import React, { PropTypes, Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				{this.props.children}
			</MuiThemeProvider>
		);
	}
}

// About propTypes, see
// https://facebook.github.io/react/docs/reusable-components.html
App.propTypes = {
	children: PropTypes.node
};

export default App;
