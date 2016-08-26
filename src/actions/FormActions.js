import { dispatch } from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const FormActions = {
	changeText(val) {
		dispatch({
			type: AppConstants.FORM_CHANGE_TEXT,
			value: val
		});
	},

	send(val) {
		dispatch({
			type: AppConstants.FORM_SEND,
			value: val
		});
	}
};

export default FormActions;
