import React from 'react';
import FeaturedListingContainer from '../listings/featured_listing_container';

class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: '',
      guests: ''
    };
    this.handleButtonPush = this.handleButtonPush.bind(this);
  }


  componentDidMount() {
    window.scrollTo(0, 0);
    // $('.home-transparent').parallax({imageSrc: 'https://res.cloudinary.com/ac31624/image/upload/v1498532175/airbnb_bg1_zjxnnp.jpg'});
    $('.home-transparent').parallax({imageSrc: 'https://res.cloudinary.com/ac31624/image/upload/v1498532174/airbnb_bg2_hzr2xc.jpg'});
    // $('.home-transparent').parallax({imageSrc: 'https://res.cloudinary.com/ac31624/image/upload/v1498532175/airbnb_bg3_bhw9cg.jpg'});
  }

  componentWillUnmount() {
    $('.parallax-mirror').remove();
  }

  handleButtonPush() {
    event.preventDefault();
    this.props.fetchAllListings(this.state)
    .then(this.props.history.push(`/listings/`));
  }

  render(){
    const length = this.props.allListings.length;
    let randomNumbers = [];
    if (this.props.allListings.length > 0) {
      while (randomNumbers.length < 6) {
        let rand = Math.floor((Math.random() * (length) ));
        if ( !randomNumbers.includes(rand)) {
          randomNumbers.push(rand);
        }
      }
    }

    const featuredListings = randomNumbers.map( (number, idx) => {
      return <FeaturedListingContainer key={idx} listing={this.props.allListings[number]}/>;
    });

    const cities = [];
    this.props.allListings.forEach( (listing) => {
      if (!cities.includes(listing.city)) {
        cities.push(listing.city);
      }
    });

    // const numHomes = this.props.allListings.length;
    // const numCities = cities.length;

    return (
      <div>
        <div className='home-transparent'>

          <div className='definition-container'>
            <div className='def-top'>
              <div className='boujee'>boujee:</div><div className='pronunciation'>[ boo • jee ]</div><div className='adjective'>adjective</div>
            </div>
          <div className='definition'>1. a critical term used to describe people, things, and places that are definitively high-class.</div>
          </div>

        </div>

        <div className='home-description'>
          <div className='featured-spacing'>{featuredListings}</div>
          <br/>
          <div className='featured-heading'>Find your next vacation today!</div>
        </div>
      </div>
    );
  }
}

export default HomePage;

// <button className='featured-button' onClick={this.handleButtonPush} type="submit">See Listings</button>
