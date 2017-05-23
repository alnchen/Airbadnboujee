import React from 'react';
import { Link } from 'react-router-dom';
class ListingsIndex extends React.Component {

  render() {
    return (
        <div className='footer-links'>
          <par className='footer-links-column'>
          <label className='footer-column-category'>ABOUT</label>
            Paragraph about my project goes here
            <br/>
            But first....
            <audio id="music" controls="controls">
              <source src="http://freeringtonesdownload.info/download/?id=5251" type="audio/mpeg" />
            </audio>
          </par>

          <div className='footer-links-column'>
            <label className='footer-column-category'>AirBadnBoujie</label>
            <Link to="/about-us">About Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/press">Press</Link>
            <Link to="/policies">Policies</Link>
            <Link to="/help">Help</Link>
            <Link to="/diversity">Diversity & Belonging</Link>
          </div>

          <div className='footer-links-column'>
            <label className='footer-column-category'>Discover</label>
            <Link to="/trust">Trust & Safety</Link>
            <Link to="/travel-credit">Travel Credit</Link>
            <Link to="/giftcards">Gift Cards</Link>
            <Link to="/business-travel">Business Travel</Link>
            <Link to="/guidebooks">Guidebooks</Link>
          </div>

          <div className='footer-links-column'>
            <label className='footer-column-category'>Social</label>
            <Link to="/why-host">Why Host</Link>
            <Link to="/hospitality">Hospitality</Link>
            <Link to="/responsible-hosting">Listings</Link>
            <Link to="/communication-center">Communication Center</Link>
            <Link to="/listings">Listings</Link>
          </div>
        </div>
    );
  }
}

export default ListingsIndex;
