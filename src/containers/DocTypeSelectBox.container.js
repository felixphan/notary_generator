import {
	connect
} from 'react-redux';
import DocTypeSelectBox from '../components/block-components/DocTypeSelectBox';
import { setLocale } from 'react-redux-i18n';
import { setDocType } from '../actions/DocType';

const mapStateToProps = (state, ownProps) => {
	console.log(state);
	return {
		docType: state.docType,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleChange: (event) => {
			const value = event.target.value;
			console.log(value);
			dispatch(setDocType(value));
			dispatch(setLocale(value));
		}
	};
};

const DocTypeSelectBoxContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(DocTypeSelectBox);

export default DocTypeSelectBoxContainer;