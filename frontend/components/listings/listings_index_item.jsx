import React from 'react';

class ListingsIndexItem extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }

  render(){


      return (
        <div className="listingIndexItem">
          <img src={this.props.listing.image_url}></img>
        </div>
      );
  }
}


export default ListingsIndexItem;

// const { image_url, title, price } = this.props.listing;
