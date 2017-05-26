import React from 'react';
import Rating from 'react-rating';


class ReviewDetail extends React.Component{
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteReview(this.props.review.id);
  }

  render() {
    const { body, rating } = this.props.review;
    const image_url = this.props.review.author.image_url ?
                      this.props.review.author.image_url : 'https://d28rk61hailme.cloudfront.net/assets/default_user-856f2487c07862f3089cfcb1528df354.png'


    const deleteButton = () => {
      if (this.props.currentUser) {
        return this.props.review.author.id === this.props.currentUser.id ?
        <button className='detail-remove' onClick={this.handleDelete}>Remove Your Comment?</button>
        : <div></div>;
      }
    };

    return (
      <div className='review'>

        <div>
          <img className='review-pf-pic' src={image_url} />
          <div className='review-rating'>Rating: {rating}/10</div>
        </div>

          {body}

        <br/>
      { deleteButton() }
      </div>
    );
  }
}

export default ReviewDetail;
