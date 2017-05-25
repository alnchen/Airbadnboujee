import React from 'react';
import { DateRangePicker } from 'react-dates';
import { Link } from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      num_of_guests: null,
      price: 0,
      errors: null,
    };
    this.handleGuests = this.handleGuests.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.sessionMessage = this.sessionMessage.bind(this);
  }

  handleGuests(event) {
    this.setState({num_of_guests: event.currentTarget.value}, () => {
      // console.log(this.state);
    });
  }

  componentDidMount() {
    // if (!this.props.listing.id) {
    //   this.props.fetchAllListings(filters);
    // }
  }

  sessionMessage() {
    if (!this.props.currentUser) {
      return (
        <div className='signed-out-message'>Log in to book.</div>
      );
    } else {
      return (
        <button type='submit'>Book My Stay</button>
        // <Link to="/trips">Book My Stay</Link>
      );
    }
  }

  calculatePrice() {
    const numDays = this.state.endDate.diff(this.state.startDate, 'days');
    const cost = this.props.listing.price;
  }

  handleFormSubmit(e) {
    e.preventDefault();
    if (!this.state.startDate || !this.state.endDate) {
      this.setState({errors: ['Please Fill In Dates']});
      return;
    } else if (!this.state.num_of_guests) {
      this.setState({errors: ['How many guests?']});
    } else {
      this.setState({errors: []});
    }
    const details = {
                      user_id: this.props.currentUser.id,
                      listing_id: this.props.listing.id,
                      check_in: this.state.startDate.format("DD-MM-YYYY"),
                      check_out: this.state.endDate.format("DD-MM-YYYY"),
                      num_of_guests: this.state.num_of_guests
                    };
    // console.log(details);
    this.props.addBooking({booking: details})
    .then(this.props.history.push(`/trips/`));
  }

  render() {

    const errors = this.state.errors ? this.state.errors.map( (error, idx) => <div className='booking-form-errors' key={idx}>{error}</div>) : <div></div>

  const nights = this.state.startDate && this.state.endDate ? this.state.endDate.diff(this.state.startDate, 'days') : null
  const cost = nights ? (<div>Total cost for { nights } nights before fees: ${ nights * this.props.listing.price }</div>) : (<div></div>)

    return (
      <form className='booking-form' onSubmit={this.handleFormSubmit}>

        <div className='form-label'>Request Booking</div>
          <DateRangePicker
            startDatePlaceholderText={'Check In'}
            endDatePlaceholderText={'Check Out'}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate: startDate, endDate: endDate, errors: null })}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
            minimumNights={0}
          />

        <select className='guests-dropdown' onChange={this.handleGuests}>
          <option selected disabled value='default'>Number of Guests</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10+</option>
        </select>

        { errors }

        { cost }

        <br/>
        { this.sessionMessage() }
      </form>
    );
  }
}

export default BookingForm;

// {this.state.errors.map(error => (
//   <h1 className='booking-form-error'>{error}</h1>
// ))}
//
// {this.props.errors.map(error => (
//   <h1 className='booking-form-error'>{error}</h1>
// ))}
