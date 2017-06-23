import React from 'react';
import { Link } from 'react-router-dom';
class ListingsIndex extends React.Component {

  render() {
    // <div className='bio'>Allen Chen. Software Developer. San Francisco.</div>
    return (
        <div className='footer-links'>
          <div className='footer-links-column'>
          <label className='footer-column-category'>About Me</label>
            <a className='bio-link' target="_blank" href='http://allenchen.io/'>allenchen.io</a>
            <a className='bio-link' target="_blank" href='https://linkedin.com/in/alchen1231'>LinkedIn</a>
            <a className='bio-link' target="_blank" href='https://github.com/alnchen'>Github</a>
            <audio className='music-player' id="music" controls="controls">
              <source src="http://freeringtonesdownload.info/download/?id=5251" type="audio/mpeg" />
            </audio>
          </div>

          <div className='footer-links-column'>
            <label className='footer-column-category'>AirBadnBoujee</label>
            <div className='fake-link'>About Us</div>
            <div className='fake-link'>Careers</div>
            <div className='fake-link'>Press</div>
            <div className='fake-link'>Policies</div>
            <div className='fake-link'>Help</div>
            <div className='fake-link'>Diversity & Belonging</div>
          </div>

          <div className='footer-links-column'>
            <label className='footer-column-category'>Discover</label>
            <div className='fake-link'>Trust & Safety</div>
            <div className='fake-link'>Travel Credit</div>
            <div className='fake-link'>Gift Cards</div>
            <div className='fake-link'>Business Travel</div>
            <div className='fake-link'>Guidebooks</div>
          </div>

          <div className='footer-links-column'>
            <label className='footer-column-category'>Social</label>
            <div className='fake-link'>Why Host</div>
            <div className='fake-link'>Hospitality</div>
            <div className='fake-link'>Listings</div>
            <div className='fake-link'>Communication Center</div>
            <div className='fake-link'>Listings</div>
          </div>
        </div>
    );
  }
}

export default ListingsIndex;
