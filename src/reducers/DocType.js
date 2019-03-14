import {
	SET_DOC_TYPE
} from '../actions/types';

export function docType(state = [], action) {
	switch (action.type) {
	case SET_DOC_TYPE:
		return {
			...state,
			docType: action.text
		};
	default:
		return state;
	}
}

export default docType;