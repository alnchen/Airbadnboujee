import React from 'react';
import ListingsMap from './listings_map';
import ListingsIndex from './listings_index';

class SearchMap extends React.Component{

  render() {
    return (
      <div className="searchMap">
        <ListingsIndex allListings={this.props.allListings} fetchAllListings={this.props.fetchAllListings}/>
        <ListingsMap listings={this.props.allListings} />
      </div>
    );
  }
}

export default SearchMap;
