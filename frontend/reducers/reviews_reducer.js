import { RECEIVE_REVIEW, RECEIVE_REVIEWS, RECEIVE_REVIEW_ERRORS, DELETE_REVIEW, CLEAR_REVIEW_ERRORS } from '../actions/review_actions';


const reviewReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState =  Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_REVIEWS:
      // console.log('hit receive reviews');
      newState = {reviews: action.reviews};
      newState.errors = [];
      return newState;
    case RECEIVE_REVIEW:
      // console.log('hit receive single review');
      newState = Object.assign({}, state);
      newState.reviews[action.review.id] = action.review;
      return newState;
    case RECEIVE_REVIEW_ERRORS:
      newState.errors = action.errors;
      return newState;
    case CLEAR_REVIEW_ERRORS:
      newState.errors= [];
      return newState;
    default:
      // console.log('hit default');
      return state;
  }
};


export default reviewReducer;
