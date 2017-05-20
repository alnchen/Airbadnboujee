import { fetchAllListings } from './listings_actions';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

export const changeBounds = (bounds) => ({
  type: UPDATE_BOUNDS,
  bounds
});

// export const updateBounds = (bounds) => dispatch => (
//   dispatch(changeBounds(bounds))
// );


export const updateBounds = (filter) => (dispatch, getState) => {
  dispatch(changeBounds(filter));
  return fetchAllListings({ bounds: getState().filter} )(dispatch);
};
