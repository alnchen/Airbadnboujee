import React from 'react';

class FeaturedListing extends React.Component{

  render() {
    return (
      <div className='featured-image-container'>
        <div className='featured-caption'>{this.props.listing.city}</div>
        <img className='featured-image' src={this.props.listing.image_url}/>
      </div>
    );
  }
}

export default FeaturedListing;

// <img className='featured-image' src={this.props.listing.image_url}/>
// <div className='featured-title'>{this.props.listing.title}</div>
