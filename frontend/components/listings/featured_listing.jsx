import React from 'react';
import { Link } from 'react-router-dom';

class FeaturedListing extends React.Component{
  // componentDidMount() {
  //   this.props.fetchAllListings();
  // }

  render() {

    const id = this.props.listing.id || '';

    return (
        <div className='featured-image-container'>
          <Link to={`/listings/${id}`}>
          <div className='featured-caption'>{this.props.listing.city}</div>
          <img className='featured-image' src={this.props.listing.image_url}/>
          </Link>
        </div>
    );
  }
}

export default FeaturedListing;
