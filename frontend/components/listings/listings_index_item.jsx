import React from 'react';

class ListingsIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){


      return (
        <div className="listingIndexItem">
          <li>
            <img src={this.props.listing.image_url}></img>
          </li>
        </div>
      );
  }
}


export default ListingsIndexItem;

// const { image_url, title, price } = this.props.listing;
