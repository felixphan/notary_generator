import { SET_FIRST_NAME } from '../actions/types';

export function firstName(state = '', action) {
	switch (action.type) {
	case SET_FIRST_NAME:
		return action.firstName;
	default:
		return state;
	}
}

export default firstName;