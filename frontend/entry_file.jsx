import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  window.store = store;
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={store}/>, root);
});

//testing
// import { login, signup, logout } from './actions/session_actions';
// window.login = login;
// window.signup = signup;
// window.logout = logout;
// import { fetchAllListings, fetchOneListing, addListing } from './actions/listings_actions';
// window.fetchAllListings = fetchAllListings;
// window.fetchOneListing = fetchOneListing;
// window.addListing = addListing;
// import { fetchAllBookings, addBooking, deleteBooking} from './util/booking_util';
// window.fetchAllBookings = fetchAllBookings;
// window.addBooking = addBooking;
// window.deleteBooking = deleteBooking;
// import { addReview } from './actions/review_actions';
// window.addReview = addReview;
// import { fetchReviews } from './actions/review_actions';
// window.fetchReviews = fetchReviews;
