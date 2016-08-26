import { dispatch } from '../dispatcher/AppDispatcher';
import AuthConstants from '../constants/AuthConstants';

const AuthActions = {
	fetchMemberState() {
		// 非同期通信
		setTimeout(() => {
			dispatch({
				type: AuthConstants.FETCH_MEMBER_STATE,
				value: true
			});
		}, 1000)
	}
};

export default AuthActions;
