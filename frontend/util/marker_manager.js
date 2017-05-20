import { Link } from 'react-router-dom';

export default class MarkerManager {
  constructor(map, infowindow) {
    this.map = map;
    this.markers = {};
    this.infowindow = infowindow;
  }

  updateMarkers(listings) {
    const listingsObj = {};
    listings.forEach((listing) => {
      listingsObj[listing.id] = listing;
    });

    listings
      .filter(listing => !this.markers[listing.id])
      .forEach((newListing) => {
      this.createMarkerFromListing(newListing, this.infowindow);
    });
  }

  createMarkerFromListing(listing, infowindow) {
    const pos = new google.maps.LatLng(listing.lat, listing.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
    });


    marker.addListener('click', function () {
      infowindow.close();
      infowindow.setContent(listing.title);
      infowindow.open(this.map, marker);
    });

    this.markers[marker.listingId] = marker;

  }

}
