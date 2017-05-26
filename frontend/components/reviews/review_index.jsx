import React from 'react';
import ReviewDetail from './review_detail';

class ReviewIndex extends React.Component{
  constructor(props){
    super(props);

  }


  componentWillMount() {
    this.props.fetchReviews(this.props.listing_id);
    // console.log(this.props.reviews);
  }

  render() {

    const list = this.props.reviews.map( (review, idx) => {
      return <ReviewDetail key={ idx } review={review}/>;
    });

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default ReviewIndex;
