import React from 'react';
import FeaturedListing from '../listings/featured_listing';

class HomePage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    $('.home-transparent').parallax({imageSrc: 'https://goo.gl/nNSkx0'});
  }

  componentWillUnmount() {
    $('.parallax-mirror').remove();
  }

  render(){

    const featured = [];

    if ( this.props.allListings.length > 1 ) {
      while (featured.length < 6) {
        let rand = Math.floor((Math.random() * this.props.allListings.length) + 1 );

        if ( !featured.includes(this.props.allListings[rand])   ) {
          featured.push(this.props.allListings[rand]);
        }
      }
    }

    const featuredListings = featured.map( (listing, idx) => {
      return <FeaturedListing key={idx} listing={listing}/>;
    });

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
          <div className='featured-heading'>Find your next vacation today</div>
        </div>
      </div>
    );
  }
}

export default HomePage;


// <img src='https://goo.gl/nNSkx0'/>
