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
    case DELETE_BOOKING:
      let nextState = merge({}, state);
      delete nextState.bookings[action.booking.id];
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
