import React, { PropTypes, Component } from 'react';
import { Container } from 'flux/utils';
import AuthStore from '../stores/AuthStore';
import AuthActions from '../actions/AuthActions';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// This component is mounted on Initial Loading
class App extends Component {
	// About propTypes, see
	// https://facebook.github.io/react/docs/reusable-components.html
	static propTypes = {
		children: PropTypes.node
	};

	static getStores(): Array<Store> {
		return [AuthStore];
	}

	static calculateState(prevState: ?State): State {
		console.info('[App::calculateState] state', prevState);
		return {
			auth: AuthStore.getState(),
		};
	}

	componentWillMount() {
		// 非同期通信。ユーザログイン情報をfetch。ローディングし終わるまでは、ロード画面を表示し続ける。
		// それによって、App以下のComponentsではほぼ認証情報をローカルから取得できる前提で処理をかける。
		// https://github.com/nabeliwo/jwt-react-redux-auth-example/blob/master/src/containers/App.jsx

		// TODO: Server側でもFETCH出来るように。また初期ロード時に二重通信しないようにしたい。
		AuthActions.fetchMemberState();
	}

	render() {
		return this.state.auth.isPrepared ?
		(
			<MuiThemeProvider>
				{this.props.children}
			</MuiThemeProvider>
		)
		:
		(
			<div>"LOADING AUTH INFORMATION"</div>
		)
		;
	}
}

export default Container.create(App);
