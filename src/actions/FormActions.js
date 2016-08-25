import { dispatch } from '../dispatcher/AppDispatcher';
import FormConstants from '../constants/FormConstants';

const FormActions = {
	changeText(val) {
		dispatch({
			type: FormConstants.CHANGE_TEXT,
			value: val
		});
	},

	send(val) {
		dispatch({
			type: FormConstants.SEND,
			value: val
		});
	}
};

export default FormActions;
