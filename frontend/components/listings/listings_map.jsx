import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router';

class ListingsMap extends React.Component{

  componentDidMount() {
    // const mapOptions = {
    //   center: { lat: 34.0430, lng: -118.2673 },
    //   zoom: 5
    // };

    // const lat = this.props.listings[0] ? this.props.listings[0].lat : 37.7909;
    // const lng = this.props.listings[0] ? this.props.listings[0].lng : -122.3934;

    const mapOptions = {
      // center: { lat: lat, lng: lng },
      zoom: 10
    };

    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    const infowindow = new google.maps.InfoWindow();
    this.MarkerManager = new MarkerManager(this.map, infowindow, this.handleMarkerClick.bind(this));

    // need to get bounds in the right format

    // this.registerListeners();
    // this.props.updateBounds(bounds);
    this.MarkerManager.updateMarkers(this.props.listings);
  }



  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
  }



  // registerListeners() {
  //   google.maps.event.addListener(this.map, 'idle', () => {
  //     const { north, south, east, west } = this.map.getBounds().toJSON();
  //     const bounds = {
  //       northEast: { lat: north, lng: east },
  //       southWest: { lat: south, lng: west } };
  //       // console.log(bounds);
  //     this.props.updateBounds(bounds);
  //   });
  // }

  render() {
    return (
      <div>
      <div className='map-container' ref='map'/>
      </div>
    );
  }

  handleMarkerClick(listing) {
    this.props.history.push(`/listings/${listing.id}`);
  }
}

export default withRouter(ListingsMap);
