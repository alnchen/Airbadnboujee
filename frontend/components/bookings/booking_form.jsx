import React from 'react';
// import BookingIndexItem from './booking_index_item';

// params.require(:booking).permit(:user_id, :listing_id, :check_in, :check_out, :num_of_guests)

class BookingForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user_id: '',
      listing_id: '',
      check_in: '',
      check_out: '',
      num_of_guests: '',
    };
    this.handleCheckIn = this.handleCheckIn.bind(this);
    this.handleCheckOut = this.handleCheckOut.bind(this);
    this.handleGuests = this.handleGuests.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


  componentDidMount() {
    // this.props.fetchAllListings();
  }

  handleCheckIn(e) {

  }

  handleCheckOut(e) {

  }

  handleGuests(event) {
    this.setState({num_of_guests: event.currentTarget.value});
  }

  componentWillMount() {
    // this.props.fetchAllBookings();
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const booking = ({booking: this.state});
    // console.log(this.state);
    this.props.addBooking(booking);
  }

  render() {
    return (
      <div className='booking-form'>
        <form onSubmit={this.handleFormSubmit}>

          <div>{this.props.price}</div>
          <select onChange={this.handleGuests}>
            <option defaultValue disabled value='default'>Number of Guests</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10+</option>
          </select>
          <button type='submit'>Book My Stay</button>
        </form>
      </div>
    );
  }
}

export default BookingForm;
