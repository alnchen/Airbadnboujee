import { connect } from 'react-redux';
import { addBooking } from '../../actions/booking_actions';
import BookingForm from './booking_form';
import { withRouter } from 'react-router';
import { fetchAllListings } from '../../actions/listings_actions';


const mapStateToProps = (state, ownProps) => ({
  listing: state.listing || {},
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  addBooking: (booking) => dispatch(addBooking(booking)),
  fetchAllListings: (filters) => dispatch(fetchAllListings(filters))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingForm));
