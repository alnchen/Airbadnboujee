import * as APIUtil from '../util/booking_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_ONE_BOOKING = 'RECEIVE_ONE_BOOKING'
export const DELETE_BOOKING = 'DELETE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS'

export const receiveBookings = (bookings) => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const receiveOneBooking = (booking) => ({
  type: RECEIVE_ONE_BOOKING,
  booking
});

export const removeBooking = (booking) => ({
  type: DELETE_BOOKING,
  booking
});

export const receiveBookingErrors = (errors) => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

export const addBooking = (booking) => dispatch => (
  APIUtil.addBooking(booking)
  // .then(newBooking => dispatch(receiveOneBooking(newBooking)),
  // errors => dispatch(receiveBookingErrors(errors)))
  .fail(errors => dispatch(receiveBookingErrors(errors)))
);

export const fetchAllBookings = () => dispatch => (
  APIUtil.fetchAllBookings()
  .then(bookings => dispatch(receiveBookings(bookings)))
);

export const deleteBooking = (id) => dispatch => (
  APIUtil.deleteBooking(id)
  .then(booking => dispatch(removeBooking(booking)))
);
