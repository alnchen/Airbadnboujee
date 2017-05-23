import React from 'react';
import { Route } from 'react-router-dom';
import DefaultListingDetails from './default_listing_details';

class ListingsDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchOneListing(this.props.match.params.id)
    .then(window.scrollTo(0, 0));
  }

  componentWillUnmount() {
    $('.parallax-mirror').remove();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchOneListing(this.props.match.params.id);
    }
  }

  render() {
    const { lat, lng, owner_id, price, description, title, city, state, country, image_url, max_guests } = this.props.listing;

    $('.detail-image-container').parallax({imageSrc: image_url})

    return (
      <div>
        <div className="detail-image-container"><img className="detail-image" src={image_url}/></div>
        <div className="detail-item">
          <div className="detail-item-info">
            <button className="detail-price">Price per night: {price}</button>
            <div className="detail-title">{title}</div>
            <div className="detail-city-state">{city}, {state}</div>
            <div className="detail-max-guests">Max Guests: {max_guests}</div>
            <br/>
            <div style={{fontSize:13}}>About my place:</div>
            <div className="detail-description">{description}</div>
            <br/>
            <DefaultListingDetails />
          </div>
          <div className="detail-item-form">
            <h1>FORM GOES HERE</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingsDetail;
