import { SET_LAST_NAME } from '../actions/types';

export function lastName(state = '', action) {
	switch (action.type) {
	case SET_LAST_NAME:
		return action.lastName;
	default:
		return state;
	}
}

export default lastName;