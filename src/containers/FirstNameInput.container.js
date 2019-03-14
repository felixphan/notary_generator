import {
	connect
} from 'react-redux';
import FirstNameInput from '../components/block-components/FirstNameInput';
import {
	setFirstName
} from '../actions/FirstName';

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleChange: (event) => {
			dispatch(setFirstName(event.target.value));
		}
	};
};

const FirstNameInputContainer = connect(
	null,
	mapDispatchToProps
)(FirstNameInput);

export default FirstNameInputContainer;