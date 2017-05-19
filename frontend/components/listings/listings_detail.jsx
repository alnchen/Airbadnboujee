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

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchOneListing(this.props.match.params.id);
    }
  }

  render() {
    const { lat, lng, owner_id, price, description, title, city, state, country, image_url } = this.props.listing;

    return (
      <div>
        <div className="detail-image-container"><img className="detail-image" src={image_url}/></div>
        <div className="detail-item">
          <div className="detail-item-info">
            <div className="detail-price">{price}</div>
            <div className="detail-title">{title}</div>
            <div className="detail-description">{description}</div>
            <div className="detail-city">{city}</div>
            <div className="detail-state">{state}</div>
            <DefaultListingDetails />
          </div>
          <div className="detail-item-form">
            <h1>FORM HERE</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingsDetail;
