import React, { PropTypes } from 'react';

const App = (props) => (
	<main className="viewport">
		{props.children}
	</main>
);

App.propTypes = {
	children: PropTypes.node
};

export default App;