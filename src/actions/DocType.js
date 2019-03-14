import { SET_DOC_TYPE } from './types';

export function setDocType(text){
	return {
		type: SET_DOC_TYPE,
		text,
	};
}