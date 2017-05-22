import merge from 'lodash/merge';

import { UPDATE_BOUNDS } from '../actions/filter_actions';

const defaultState = {
  bounds: {}
};

const FilterReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_BOUNDS:
      // console.log("inside filters reducer update bounds");
      return Object.assign({}, state, { bounds: action.bounds });
    default:
      return state;
  }
};

export default FilterReducer;
