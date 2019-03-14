import {
	connect
} from 'react-redux';
import LastNameInput from '../components/block-components/LastNameInput';
import {
	setLastName
} from '../actions/LastName';

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleChange: (event) => {
			dispatch(setLastName(event.target.value));
		}
	};
};

const LastNameInputContainer = connect(
	null,
	mapDispatchToProps
)(LastNameInput);

export default LastNameInputContainer;