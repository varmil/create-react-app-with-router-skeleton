import React, { PropTypes, Component } from 'react';

class App extends Component {
	render() {
		return (
			<div>
				{ this.props.children }
			</div>
		);
	}
}

// About propTypes, see
// https://facebook.github.io/react/docs/reusable-components.html
App.propTypes = {
	children: PropTypes.node
};

export default App;
