import React, { Component, PropTypes } from 'react';
import { Container } from 'flux/utils';
import AuthStore from '../stores/AuthStore';

class Redirection extends Component {
	static propTypes = {
		children: PropTypes.object.isRequired,
	};

	static getStores(): Array<Store> {
		return [AuthStore];
	}

	static calculateState(prevState: ?State): State {
		return AuthStore.getState();
	}

	componentWillMount() {
		this.redirect(this.props);
	}

	componentWillUpdate(nextProps) {
		this.redirect(nextProps);
	}

	// For Override
	redirect() {
		throw new TypeError("Do not call abstract method from child.");
	}

	render() {
		return <div>{this.props.children}</div>;
	}
}

// NOTE: withRouter() --> Container.create()
export default Container.create(Redirection);
