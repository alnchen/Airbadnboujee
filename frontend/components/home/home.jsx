import React from 'react';
import FeaturedListingContainer from '../listings/featured_listing_container';

class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: '',
      guests: ''
    };
  }


  componentDidMount() {
    window.scrollTo(0, 0);
    $('.home-transparent').parallax({imageSrc: 'https://goo.gl/nNSkx0'});
  }

  componentWillUnmount() {
    $('.parallax-mirror').remove();
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
