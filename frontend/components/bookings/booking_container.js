import { connect } from 'react-redux';
import { fetchAllBookings, deleteBooking } from '../../actions/booking_actions';
import Booking from './booking';
import { bookingsArray } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  bookings: bookingsArray(state) || []
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllBookings: () => dispatch(fetchAllBookings()),
  deleteBooking: (id) => dispatch(deleteBooking(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Booking);
