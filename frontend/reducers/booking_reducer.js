import { RECEIVE_BOOKINGS, RECEIVE_ONE_BOOKING, DELETE_BOOKING, RECEIVE_BOOKING_ERRORS } from '../actions/booking_actions';
import merge from 'lodash/merge';

const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;
    case RECEIVE_ONE_BOOKING:
      const booking = action.booking;
      return merge({}, state, {booking});
    case DELETE_BOOKING:
      const nextState = merge({}, state);
      delete nextState[action.booking.id];
      return nextState;
    default:
      return state;
  }
};

export default BookingsReducer;
