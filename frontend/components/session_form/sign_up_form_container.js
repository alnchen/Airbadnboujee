import { connect } from 'react-redux';
import SignUpForm from './sign_up_form';
import { signup, login } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.session.errors
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
  closeModal: ownProps.closeModal,
  logInModal: ownProps.logInModal
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
