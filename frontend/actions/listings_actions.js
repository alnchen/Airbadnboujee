import * as APIUtil from '../util/listings_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';

export const receiveListings = (listings) => ({
  type: RECEIVE_LISTINGS,
  listings
});

export const receiveListing = (listing) => ({
  type: RECEIVE_LISTING,
  listing
});

export const fetchAllListings = () => dispatch => (
  APIUtil.fetchAllListings()
  .then(listings => dispatch(receiveListings(listings)))
);

export const fetchOneListing = (id) => dispatch => (
  APIUtil.fetchOneListing(id)
  .then(listing => dispatch(receiveListing(listing)))
);

export const addListing = (listing) => dispatch => (
  APIUtil.addListing(listing)
  .then(listing => dispatch(receiveListing(listing)))
);
