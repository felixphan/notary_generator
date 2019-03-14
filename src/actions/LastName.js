import { SET_LAST_NAME } from './types';

export function setLastName(lastName){
	return {
		type: SET_LAST_NAME,
		lastName
	};
}