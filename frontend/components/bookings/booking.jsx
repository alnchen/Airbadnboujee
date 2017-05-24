import React from 'react';
import BookingIndexItem from './booking_index_item';

class Booking extends React.Component {

  componentWillMount() {
    this.props.fetchAllBookings();
  }

  render() {

    const output = this.props.bookings.map((booking, idx) => <BookingIndexItem booking={ booking } listing={ booking.listing } key={idx}/>);

    return (
    <div className="bookings">{ output }</div>
    );
  }
}

export default Booking;
