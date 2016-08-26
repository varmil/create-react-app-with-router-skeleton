import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

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
			case AppConstants.AUTH_FETCH_MEMBER_STATE:
				return {
					...state,
					isPrepared: action.value,
					isLoggedIn: action.value,
					isPremium: false
				};
			default:
				return state;
		}
	}
};

// Export a singleton instance of the store, could do this some other way if
// you want to avoid singletons.
const instance = new AuthStore(AppDispatcher);
export default instance;
