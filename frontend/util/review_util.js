export const fetchAllReviews = (listing_id) => (
  $.ajax({
    method: 'GET',
    url: 'api/reviews',
    data: {listing_id}
  })
);

export const addReview = (review) => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: review
  })
);

export const deleteReview = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/reviews/${id}`,
  })
);
