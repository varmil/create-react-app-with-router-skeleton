import { dispatch } from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const AuthActions = {
	fetchMemberState() {
		// 非同期通信
		setTimeout(() => {
			dispatch({
				type: AppConstants.AUTH_FETCH_MEMBER_STATE,
				value: true
			});
		}, 1000)
	}
};

export default AuthActions;
