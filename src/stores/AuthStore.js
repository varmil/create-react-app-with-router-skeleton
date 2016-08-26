import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AuthConstants from '../constants/AuthConstants';

class AuthStore extends ReduceStore {
	getInitialState() {
		return {
			isPrepared: false,
			isLoggedIn: false,
			isPremium: false,
		};
	}

	reduce(state, action) {
		switch (action.type) {
			case AuthConstants.FETCH_MEMBER_STATE:
				return {
					isPrepared: action.value,
					isLoggedIn: action.value,
					isPremium: false,
				};
			default:
				console.info('Not match any actions', state, action);
				return state;
		}
	}
};

// Export a singleton instance of the store, could do this some other way if
// you want to avoid singletons.
const instance = new AuthStore(AppDispatcher);
export default instance;
