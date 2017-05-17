import { connect } from 'react-redux';
import LogInForm from './log_in_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.session.errors
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  login: user => dispatch(login(user)),
  closeModal: ownProps.closeModal
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
