import { SET_FIRST_NAME } from './types';

export function setFirstName(firstName){
	return {
		type: SET_FIRST_NAME,
		firstName
	};
}