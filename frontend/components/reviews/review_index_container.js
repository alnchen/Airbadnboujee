import { connect } from 'react-redux';
import { addReview, fetchReviews } from '../../actions/review_actions';
import ReviewIndex from './review_index';
import { reviewsArray } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  reviews: reviewsArray(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchReviews: (id) => dispatch(fetchReviews(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
