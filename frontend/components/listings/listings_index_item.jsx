import React from 'react';

class ListingsIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { image_url, title, price, city } = this.props.listing;
      return (
        <div className="listing-index-item">
          <li>
            <div className="index-img-container" style={{backgroundImage: `url(${image_url})`}}></div>
            <div className="index-title">${price} {title}</div>
            <div className="index-city">{city}</div>
          </li>
        </div>
      );
  }
}


export default ListingsIndexItem;

// <div className="index-img-container"><img src={image_url}></img></div>
