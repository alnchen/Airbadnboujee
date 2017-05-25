import { RECEIVE_BOOKINGS, RECEIVE_ONE_BOOKING, DELETE_BOOKING, RECEIVE_BOOKING_ERRORS } from '../actions/booking_actions';
import merge from 'lodash/merge';

const _initialState = Object.freeze({
  bookings: [],
  errors: []
});

const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKINGS:
      return {bookings: action.bookings,
             errors: []};
    // case RECEIVE_ONE_BOOKING:
    //   const booking = action.booking;
    //   return merge({}, state, {bookings: [booking], errors: []});
    case DELETE_BOOKING:
      // const nextState = merge({}, state);
      // delete nextState[action.booking.id];
      // return nextState;
      return {
        bookings: state.bookings.filter( el => el.id !== action.booking.id),
        errors: []};
    case RECEIVE_BOOKING_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
    default:
      return state;
  }
};

export default BookingsReducer;
