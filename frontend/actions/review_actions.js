import * as APIUtil from '../util/review_util';

export const DELETE_REVIEW = 'DELETE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW_ERRORS = 'RECEIEVE_REVIEW_ERRORS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS';


export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveReviewErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const removeReview = (review) => ({
  type: DELETE_REVIEW,
  review
});

export const clearReviewErrors = () => ({
  type: CLEAR_REVIEW_ERRORS,
});

export const addReview = (review) => dispatch => (
  APIUtil.addReview(review)
  .then(singleReview => dispatch(receiveReview(singleReview)))
  .fail(errors => dispatch(receiveReviewErrors(errors)))
);

export const fetchReviews = (listing_id) => dispatch => (
  APIUtil.fetchAllReviews(listing_id)
  .then(reviews => dispatch(receiveReviews(reviews)))
);

export const deleteReview = (id) => dispatch => (
  APIUtil.deleteReview(id)
  .then(review => dispatch(removeReview(review)))
);
