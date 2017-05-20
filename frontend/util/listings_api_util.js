// export const fetchAllListings = () => (
//   $.ajax({
//     method: 'GET',
//     url: 'api/listings'
//   })
// );

export const fetchAllListings = data => (
  $.ajax({
    method: 'GET',
    url: 'api/listings',
    data
  })
);

export const fetchOneListing = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/listings/${id}`
  })
);

export const addListing = (listing) => (
  $.ajax({
    method: 'POST',
    url: 'api/listings',
    data: {listing}
  })
);
