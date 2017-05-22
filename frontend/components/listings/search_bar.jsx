import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: '',
      guests: ''
    };
    this.handleLocationInput = this.handleLocationInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleGuestInput = this.handleGuestInput.bind(this);
  }

  componentDidMount(){
    const test = new google.maps.places.Autocomplete(document.getElementById('txtPlaces'), {types: ['(cities)'], componentRestrictions: {country: "us"}});
    google.maps.event.addListener(test, 'place_changed', function () {
        var place = test.getPlace();
        var address = place.formatted_address;
        var latitude = place.geometry.location.A;
        var longitude = place.geometry.location.F;
    });
  }

  handleLocationInput(event) {
    this.setState({city: event.currentTarget.value});
    // console.log(this.state.city);
  }

  handleGuestInput(event) {
    this.setState({guests: event.currentTarget.value});
  }


  handleFormSubmit() {
    event.preventDefault();
    const filters = this.state;
    // console.log("inside handleFormSubmit");
    this.props.fetchAllListings(filters);
    this.props.history.push(`/listings/`);
  }


  render() {
    return (
      <form id="search_form" onSubmit={this.handleFormSubmit}>
        <br/>
        <input onBlur={this.handleLocationInput} type="text" id="txtPlaces" placeholder="Enter a location" />
          <select onChange={this.handleGuestInput}>
            <option selected disabled value='default'>Number of Guests</option>
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
          <button type="submit">Submit</button>

      </form>
    );
  }
}

export default withRouter(SearchBar);

<Link to="/listings"><button type="submit">Submit</button></Link>
//use fetchAllListings(filters)
