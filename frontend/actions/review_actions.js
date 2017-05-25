import * as APIUtil from '../util/review_util';

export const DELETE_REVIEW = 'DELETE_REVIEW';
export const RECEIEVE_REVIEW_ERRORS = 'RECEIEVE_REVIEW_ERRORS';


export const receiveReviewErrors = (errors) => ({
  type: RECEIEVE_REVIEW_ERRORS,
  errors
});

export const addReview = (review) => dispatch => (
  APIUtil.addReview(review)
  .fail(errors => dispatch(receiveReviewErrors(errors)))
);
