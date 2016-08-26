import React, { Component, PropTypes } from 'react';
import { Container } from 'flux/utils';
import { withRouter } from 'react-router'
import AuthStore from '../stores/AuthStore';

// TODO: 認証系コンポーネントを共通クラスに吸い上げられない？userWillTransferしか違いがない

class UserOnly extends Component {
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
		this.userWillTransfer(this.props);
	}

	componentWillUpdate(nextProps) {
		this.userWillTransfer(nextProps);
	}

	userWillTransfer(props) {
		// App Containerで認証情報はfetch済みの想定
		if (! this.state.isLoggedIn) {
			props.router.replace('/login');
		}
	}

	render() {
		return <div>{this.props.children}</div>;
	}
}

// NOTE: withRouter() --> Container.create()
export default withRouter(Container.create(UserOnly));
