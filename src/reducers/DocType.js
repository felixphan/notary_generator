import {
	SET_DOC_TYPE
} from '../actions/types';

export function docType(state = 'en', action) {
	switch (action.type) {
	case SET_DOC_TYPE:
		return action.text;
	default:
		return state;
	}
}

export default docType;