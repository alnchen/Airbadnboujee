import React from 'react';
import ListingsMap from './listings_map';
import ListingsIndex from './listings_index';

class SearchMap extends React.Component{

  render() {
    return (
      <div className="search-results">
        <ListingsIndex allListings={this.props.allListings} />
        <ListingsMap listings={this.props.allListings} updateBounds={this.props.updateBounds}/>
      </div>
    );
  }
}

export default SearchMap;
