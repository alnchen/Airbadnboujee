import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ListingsReducer from './listings_reducer';
import ListingDetailReducer from './listing_detail_reducer';
import FilterReducer from './filter_reducer';
import BookingsReducer from './booking_reducer';
import ReviewsReducer from './reviews_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  listings: ListingsReducer,
  listing: ListingDetailReducer,
  filters: FilterReducer,
  bookings: BookingsReducer,
  reviews: ReviewsReducer
});

export default RootReducer;
