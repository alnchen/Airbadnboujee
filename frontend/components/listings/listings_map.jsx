import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

class ListingsMap extends React.Component{

  componentDidMount() {
    const mapOptions = {
      center: { lat: 34.0430, lng: -118.2673 },
      zoom: 9
    };
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    const infowindow = new google.maps.InfoWindow();
    this.MarkerManager = new MarkerManager(this.map, infowindow);
    
    // need to get bounds in the right format

    this.registerListeners();
    // this.props.updateBounds(bounds);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };
        // console.log(bounds);
      this.props.updateBounds(bounds);
    });
  }

  render() {
    return (
      <div>
      <div className='map-container' ref='map'/>
      </div>
    );
  }
}

export default ListingsMap;
