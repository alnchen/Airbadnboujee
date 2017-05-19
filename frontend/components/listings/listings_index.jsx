import React from 'react';
import { Route } from 'react-router-dom';
import ListingsIndexItem from './listings_index_item';
import ListingsDetailContainer from './listings_detail_container';

class ListingsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllListings();
  }

  render() {
    return (
      <div className="listings-index">
        <div className="listings-index-items">
          { this.props.allListings.map( (listing, idx) => (
            <ListingsIndexItem key={idx} listing={listing} />
          ))}
        </div>
      </div>
    );
  }
}

export default ListingsIndex;
