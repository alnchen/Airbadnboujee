import React from 'react';
import { Route } from 'react-router-dom';
import ListingsIndexItem from './listings_index_item';
import ListingsDetailContainer from './listings_detail_container';

class ListingsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const empty = this.props.allListings.length === 0 ?
                  <div className='no-listings'>Sorry, no listings available here!</div>
                  : <div></div>;

    return (
      <div className="listings-index">
        { empty }
        {this.props.allListings.map( (listing, idx) => (
          <ListingsIndexItem key={idx} listing={listing} />
        ))}
      </div>
    );
  }
}

export default ListingsIndex;
