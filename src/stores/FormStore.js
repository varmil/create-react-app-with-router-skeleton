import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';
import FormConstants from '../constants/FormConstants';

class FormStore extends ReduceStore {
	getInitialState() {
		return {
			value: ''
		};
	}

	reduce(state, action) {
		switch (action.type) {
			case FormConstants.CHANGE_TEXT:
			case FormConstants.SEND:
				return {
					value: action.value
				};
			default:
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
