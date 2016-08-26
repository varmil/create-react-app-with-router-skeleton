import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

class FormStore extends ReduceStore {
	getInitialState() {
		return {
			value: ''
		};
	}

	reduce(state, action) {
		switch (action.type) {
			case AppConstants.FORM_CHANGE_TEXT:
			case AppConstants.FORM_SEND:
				return {
					...state,
					value: action.value
				};
			default:
				return state;
		}
	}

	areAllComplete(): boolean {
		return true;
	}
};

// Export a singleton instance of the store, could do this some other way if
// you want to avoid singletons.
const instance = new FormStore(AppDispatcher);
export default instance;
