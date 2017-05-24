import { RECEIVE_LISTINGS, RECEIVE_LISTING } from '../actions/listings_actions';
import merge from 'lodash/merge';



const ListingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LISTINGS:
      // console.log('inside listings reducers receive listings');
      return action.listings;
    case RECEIVE_LISTING:
      //for adding listing
      // return merge({}, state, action.listing);
    default:
      return state;
  }
};

export default ListingsReducer;
