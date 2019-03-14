import {
	connect
} from 'react-redux';
import ContactInfoPaper from '../components/ContactInfoPaper';

const mapStateToProps = (state, ownProps) => {
	return {
		firstName: state.firstName,
		lastName: state.lastName
	};
};


const ContactInfoContainer = connect(
	mapStateToProps
)(ContactInfoPaper);

export default ContactInfoContainer;