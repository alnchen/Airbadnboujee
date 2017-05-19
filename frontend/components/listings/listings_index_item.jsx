import React from 'react';
import { Link } from 'react-router-dom';

class ListingsIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount () {
    window.scrollTo(0, 0);
  }

  render(){
    const { image_url, title, price, city, id } = this.props.listing;
      return (

        <Link to={`/listings/${id}`}>
          <div className="listing-index-item">
            <img className="index-image" src={image_url}></img>
            <div className="index-description">
              <div className="index-title">${price} {title}</div>
              <div className="index-city">{city}</div>
            </div>
          </div>
        </Link>
      );
  }
}


export default ListingsIndexItem;

// <div className="index-img-container"><img src={image_url}></img></div>
