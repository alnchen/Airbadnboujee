import { RECEIVE_BOOKINGS, RECEIVE_ONE_BOOKING, DELETE_BOOKING, RECEIVE_BOOKING_ERRORS } from '../actions/booking_actions';
import merge from 'lodash/merge';

const _initialState = Object.freeze({
  bookings: [],
  errors: ["test"]
});

const BookingsReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKINGS:
    console.log('inside receive bookings');
      return {bookings: action.bookings,
             errors: []};
    // case RECEIVE_ONE_BOOKING:
    //   const booking = action.booking;
    //   return merge({}, state, {bookings: [booking], errors: []});
    case DELETE_BOOKING:
      let nextState = merge({}, state);
      // console.log(action.booking.id);
      delete nextState[action.booking.id];
      // console.log(nextState);
      return nextState;
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
