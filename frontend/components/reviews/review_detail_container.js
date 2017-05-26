import { connect } from 'react-redux';
import { deleteReview } from '../../actions/review_actions';
import ReviewDetail from './review_detail';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  deleteReview: (id) => dispatch(deleteReview(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(ReviewDetail);
