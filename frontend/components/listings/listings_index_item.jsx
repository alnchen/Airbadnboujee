import React from 'react';

class ListingsIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { image_url, title, price, city } = this.props.listing;
      return (

        <div className="listing-index-item">
          <img className="index-image" src={image_url}></img>
          <div className="index-title">${price} {title}</div>
          <div className="index-city">{city}</div>
        </div>

      );
  }
}


export default ListingsIndexItem;

// <div className="index-img-container"><img src={image_url}></img></div>
