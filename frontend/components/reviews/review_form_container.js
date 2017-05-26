import { connect } from 'react-redux';
import { addReview, fetchReviews } from '../../actions/review_actions';
import ReviewForm from './review_form';
import { withRouter } from 'react-router';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  errors: state.reviews.errors || {}
});

const mapDispatchToProps = (dispatch) => ({
  addReview: (review) => dispatch(addReview(review))
  // fetchReviews: (id) => dispatch(fetchReviews(id))
  // fetchAllListings: (filters) => dispatch(fetchAllListings(filters))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));




// iterate through listing's reviews to populate reviews
//OR
//
