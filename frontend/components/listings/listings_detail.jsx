import React from 'react';
import { Route } from 'react-router-dom';
import DefaultListingDetails from './default_listing_details';
import BookingFormContainer from '../bookings/booking_form_container';
import ReviewFormContainer from '../reviews/review_form_container';
import ReviewIndexContainer from '../reviews/review_index_container';

class ListingsDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchOneListing(this.props.match.params.id)
    .then(window.scrollTo(0, 0));
    this.props.fetchReviews(this.props.match.params.id);
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
    const { id, lat, lng, owner_id, price, description, title, city, state, country, image_url, max_guests } = this.props.listing;

    $('.detail-image-container').parallax({imageSrc: image_url})

    return (
      <div>
        <div className="detail-image-container"><img className="detail-image" src={image_url}/></div>
        <div className="detail-item">
          <div className="detail-item-info">
            <div className="detail-title">{title}</div>
            <div className="detail-city-state">{city}, {state}</div>
            <div className="detail-max-guests">Max Guests: {max_guests}</div>
            <br/>
            <div style={{fontSize:13}}>About my place:</div>
            <div className="detail-description">{description}</div>
            <br/>
            <DefaultListingDetails />
            <ReviewFormContainer listing_id={id}/>
            <ReviewIndexContainer listing_id={id}/>
          </div>
          <div className="detail-item-form">
            <BookingFormContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default ListingsDetail;
