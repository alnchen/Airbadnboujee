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
        { this.props.allListings.map( (listing) => (
          <ListingsIndexItem listing={listing} />
        ))}
      </div>
    );
  }
}

export default ListingsIndex;
