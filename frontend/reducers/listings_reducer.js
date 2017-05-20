import { RECEIVE_LISTINGS, RECEIVE_LISTING } from '../actions/listings_actions';
import merge from 'lodash/merge';

const ListingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LISTINGS:
      return action.listings;
    case RECEIVE_LISTING:
      return merge({}, state, action.listing);
    default:
      console.log("hit default");
      return state;
  }
};

export default ListingsReducer;
