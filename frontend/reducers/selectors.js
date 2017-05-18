import { values } from 'lodash';

export const listingsArray = (state) => (
  values(state.listings)
);
