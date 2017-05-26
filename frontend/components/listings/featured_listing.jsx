import React from 'react';
import { Link } from 'react-router-dom';

class FeaturedListing extends React.Component{

  render() {

    const id = this.props.listing.id || '';

    return (
      <Link to={`/listings/${id}`}>
        <div className='featured-image-container'>
          <div className='featured-caption'>{this.props.listing.city}</div>
          <img className='featured-image' src={this.props.listing.image_url}/>
        </div>
      </Link>
    );
  }
}

export default FeaturedListing;

// <img className='featured-image' src={this.props.listing.image_url}/>
// <div className='featured-title'>{this.props.listing.title}</div>
