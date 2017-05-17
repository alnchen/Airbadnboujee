import { connect } from 'react-redux';
import SignUpForm from './sign_up_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.session.errors
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: user => dispatch(signup(user)),
  closeModal: ownProps.closeModal
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
