import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

class ListingsMap extends React.Component{

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 12
    };
    const map = this.refs.map;

    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    const marker = new google.maps.Marker({
      position: { lat: 37.791488, lng: -122.39 },
      map: this.map,
    });


  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
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
