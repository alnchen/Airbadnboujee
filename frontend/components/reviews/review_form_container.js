import { connect } from 'react-redux';
import { addReview } from '../../actions/review_actions';
import ReviewForm from './review_form';
import { withRouter } from 'react-router';


const mapStateToProps = (state, ownProps) => ({
  // currentUser: state.session.currentUser
  listing: state.listing || {},
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  addReview: (review) => dispatch(addReview(review))
  // fetchAllListings: (filters) => dispatch(fetchAllListings(filters))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));
