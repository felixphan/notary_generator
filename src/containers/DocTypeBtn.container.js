import {
	connect
} from 'react-redux';
import DocTypeBtn from '../components/DocTypeBtn';
import {
	setDocType
} from '../actions/DocType';

const mapStateToProps = (state, ownProps) => {
	return {
		text: state.docType,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	console.log('here');
	return {
		handleClick: () => {
			dispatch(setDocType('Hello another'));
		}
	};
};

const DocTypeContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(DocTypeBtn);

export default DocTypeContainer;