import { values } from 'lodash';

export const listingsArray = (state) => (
  values(state.listings)
);

export const bookingsArray = (state) => (
  values(state.bookings.bookings)
);
