import React from 'react';
import { Link } from 'react-router-dom';

class BookingIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.cancelTrip = this.cancelTrip.bind(this);
  }

  // componentDidMount () {
  //   window.scrollTo(0, 0);
  // }

  cancelTrip(id) {
    return (e) => this.props.deleteBooking(id);
  }

  render(){
    const { image_url, title, price, city } = this.props.booking.listing;
    const { guest, check_in, check_out, num_of_guests, id } = this.props.booking;

    const checkInMoment = new Date(check_in);
    const checkOutMoment = new Date(check_out);
    const diff = (checkOutMoment - checkInMoment)/(1000 * 3600 * 24);


    return (
      <div className='booking-index-item'>

        <Link id={title} to={`/listings/${this.props.booking.listing.id}`}>
        <img className='booking-index-pic' src={image_url}/>
        </Link>

        <div className='booking-text'>
          <div className='booking-city'>{city}</div>
          <div>{title}</div>
          <div>{check_in} - {check_out}</div>
          <div>Number of Guests: { num_of_guests }</div>
          <div>Nights Stayed: { diff }</div>
          <br/>
          <button className='cancel-button' onClick={ this.cancelTrip(id) }>Cancel Trip</button>
        </div>

      </div>
    );
  }
}


export default BookingIndexItem;

// <button onClick={this.props.cancelTrip(this.props.booking.id)}>Cancel Trip</button>
