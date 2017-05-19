import { merge } from 'lodash';
import { RECEIVE_LISTING } from '../actions/listings_actions';

const defaultListing = {
  id: '',
  lat: '',
  lng: '',
  owner_id: '',
  price: '',
  description: '',
  title: '',
  city: '',
  state: '',
  country: '',
};

export default (state = defaultListing, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_LISTING:
      return merge({}, action.listing);
    default:
      return state;
  }
};
