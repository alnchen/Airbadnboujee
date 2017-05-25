// export const fetchAllReviews = () => (
//   $.ajax({
//     method: 'GET',
//     url: 'api/bookings',
//   })
// );

export const addReview = (booking) => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: booking
  })
);

export const deleteReview = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/reviews/${id}`,
  })
);
