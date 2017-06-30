import React from 'react';
import FeaturedListingContainer from '../listings/featured_listing_container';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

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

    const simpleListings = randomNumbers.map( (number, idx) => {
      // return <div className='simple-listing' key={idx} listing={this.props.allListings[number]}/>;
      return <div className='simple-listing'>
        <Link to={`/listings/${this.props.allListings[number].id}`}>
          <img className='simple-listing-pic' key={idx} src={this.props.allListings[number].image_url}/>
          <div className='simple-listing-city'>{this.props.allListings[number].city}</div>
        </Link>
        </div>;
    });

    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      // fade: true,
      // centerMode: true,
    };


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
          <br></br>
          <div className='heading'>AirBadnBoujee</div>
          <div className='about-us'>
            Plan the perfect vacation with us! With over 2000 listings in 300 cities, you are bound to find the perfect fit.
            Whether you are looking for a high-rise condo for a romantic getaway, a multi-story mansion for your next birthday party,
            or one of the world's most unique places to check off the bucketlist, we've got you covered!
          </div>
          <br></br>
          <hr className='line'></hr>
          <br></br>
          <div className='description-split'>
            <div className='heading'>Featured Listings</div>
            <div className='home-slider'>
              <Slider {...settings}>
                <div>{simpleListings[0]}</div>
                <div>{simpleListings[1]}</div>
                <div>{simpleListings[2]}</div>
                <div>{simpleListings[3]}</div>
                <div>{simpleListings[4]}</div>
                <div>{simpleListings[5]}</div>
              </Slider>
            </div>
            <br></br>
          </div>
          <br></br>
          <hr className='line'></hr>
          <br></br>

          <br></br>
          <Link to={'/listings/'} className='explore-button'><div className='button-text'>See Listings</div></Link>
          <br></br>
          <br></br>
        </div>

      </div>
    );
  }
}

export default HomePage;

// <button className='featured-button' onClick={this.handleButtonPush} type="submit">See Listings</button>

// homepage section v1
// <div className='home-description'>
//   <div className='featured-spacing'>{featuredListings}</div>
//   <br/>
//   <div className='featured-heading'>Find your next vacation today!</div>
// </div>

//
// <div className='home-blurb'>
//   <h1>Finding your home is easy!</h1>
//   <div>○Search by City</div>
//   <div>○Filter by Number of Occupantss</div>
//   <div>○Glance over Reviews and Ratings</div>
//   <div>○Select Duration of Stay for Quote</div>
// </div>
