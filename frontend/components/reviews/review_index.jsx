import React from 'react';
import ReviewDetailContainer from './review_detail_container';

class ReviewIndex extends React.Component{
  constructor(props){
    super(props);

  }


  componentWillMount() {
    this.props.fetchReviews(this.props.listing_id);
    // console.log(this.props.reviews);
  }

  render() {
    const list = this.props.reviews.reverse().map( (review, idx) => {
      return <ReviewDetailContainer key={ idx } review={review}/>;
    });

    return (
      <div>
        <div className='reviews-index-title'>Reviews for this spot</div>
        {list}
      </div>
    );
  }
}

export default ReviewIndex;
