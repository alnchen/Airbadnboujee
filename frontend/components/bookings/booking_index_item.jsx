import React from 'react';
import { Link } from 'react-router-dom';

class BookingIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  // componentDidMount () {
  //   window.scrollTo(0, 0);
  // }

  render(){
    const { image_url, title, price, city, id } = this.props.listing;
    const { guest, check_in, check_out, num_of_guests } = this.props.booking;

    return (
      <div className='booking-index-item'>
        <img className='booking-index-pic' src={image_url}/>
        <div>{city}</div>
        <div>{title}</div>
        <div>{check_in} - {check_out}</div>
      </div>
    );
  }
}


export default BookingIndexItem;

// <button onClick={this.props.cancelTrip(this.props.booking.id)}>Cancel Trip</button>
