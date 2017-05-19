export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(listings) {
    const listingsObj = {};
    listings.forEach((listing) => {
      listingsObj[listing.id] = listing;
    });

    listings
      .filter(listing => !this.markers[listing.id])
      .forEach((newListing) => this.createMarkerFromListing(newListing));

  }

  createMarkerFromListing(listing) {
    console.log(listing);
    const pos = new google.maps.LatLng(listing.lat, -listing.lng)

    console.log(pos);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
    });

    this.markers[marker.listingId] = marker;
  }
}
