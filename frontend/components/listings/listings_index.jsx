import React from 'react';
import ListingsIndexItem from './listings_index_item';

class ListingsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllListings();
  }



  render() {


    return (
      <div>
        <ul>
        { this.props.allListings.map( (listing) => (
          <ListingsIndexItem key={listing.id} listing={listing} />
        ))}
        </ul>
      </div>
    );
  }
}

export default ListingsIndex;
