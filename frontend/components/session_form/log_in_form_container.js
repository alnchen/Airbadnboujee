import { connect } from 'react-redux';
import LogInForm from './log_in_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.session.errors
});


const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
