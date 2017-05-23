import { Link } from 'react-router-dom';

export default class MarkerManager {
  constructor(map, infowindow, handleClick) {
    this.map = map;
    this.markers = {};
    this.infowindow = infowindow;
    this.handleClick = handleClick;
    this.removeMarker = this.removeMarker.bind(this);
  }

  updateMarkers(listings) {
    const listingsObj = {};

    const lat = listings.length > 0 ? listings[0].lat : 37.791;
    const lng = listings.length > 0 ? listings[0].lng : -122.3935;

    this.map.setCenter({ lat: lat, lng: lng});
    this.map.setZoom(10);

    listings.forEach((listing) => {
      listingsObj[listing.id] = listing;
    });

    listings
      .filter(listing => !this.markers[listing.id])
      .forEach((newListing) => {
      this.createMarkerFromListing(newListing, this.infowindow, this.handleClick);
    });

    Object.keys(this.markers)
      .filter(listingId => !listingsObj[listingId])
      .forEach((listingId) => this.removeMarker(this.markers[listingId]));

    //set position of map to center on first marker
    // this.map.setCenter(Object.keys(this.markers)[0].getPosition());
  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }

  createMarkerFromListing(listing, infowindow, handleClick) {
    const pos = new google.maps.LatLng(listing.lat, listing.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      icon: 'http://ruralshores.com/assets/marker-icon.png',
      listingId: listing.id
    });

    marker.addListener('click', function () {
      handleClick(listing);
    });

    marker.addListener('mouseover', function () {
      infowindow.close();
      infowindow.setContent(listing.title);
      infowindow.open(this.map, marker);
    });

    this.markers[marker.listingId] = marker;

    const htmlElement = document.getElementById(listing.title);
    if (htmlElement) {
      htmlElement.onmouseover = () => {
        infowindow.setContent(listing.title);
        infowindow.open(this.map, marker);
        // this.map.setCenter({ lat: listing.lat, lng: listing.lng});
      };

      htmlElement.onmouseout = () => {
        infowindow.close(this.map, marker);
      };
    }
  }

}
