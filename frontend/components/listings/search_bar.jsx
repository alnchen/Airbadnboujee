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
    this.handleAutocompleteCity = this.handleAutocompleteCity.bind(this);
    this.clearFields = this.clearFields.bind(this);
  }

  componentDidMount(){
    const autocomplete = new google.maps.places.Autocomplete(document.getElementById('txtPlaces'), {types: ['(cities)'], componentRestrictions: {country: "us"}});
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace().name;
      // console.log(place);
      this.handleAutocompleteCity(place);
    });
    google.maps.event.addDomListener(document.getElementById('txtPlaces'), 'keydown', function(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    });

    this.props.fetchAllListings(this.state);

  }

  handleAutocompleteCity(place) {
    this.setState({city: place});
  }

  handleLocationInput(event) {
    this.setState({city: event.currentTarget.value.split(',')[0]});
  }

  handleGuestInput(event) {
    this.setState({guests: event.currentTarget.value});
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.fetchAllListings(this.state)
    .then(this.props.history.push(`/listings/`));
    this.clearFields();
    this.setState({city: '',
    guests: ''});
  }

  clearFields(){
    document.getElementById('txtPlaces').value='';
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleFormSubmit}>
        <br/>

        <input onBlur={this.handleLocationInput} type="text" id="txtPlaces" placeholder="Where?" />
          <select className='navbar-select' onChange={this.handleGuestInput}>
            <option selected disabled value='default'>Guests</option>
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
        <button className='search-listings' type="submit">See Listings</button>
      </form>
    );
  }
}

export default withRouter(SearchBar);
