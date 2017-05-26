import React from 'react';
import Rating from 'react-rating';


class ReviewDetail extends React.Component{
  constructor(props){
    super(props);

  }



  render() {
    const { body, rating } = this.props.review;
    const image_url = this.props.review.author.image_url ?
                      this.props.review.author.image_url :

    return (
      <div className='review'>


        {body}

        <Rating
          placeholderRate={rating}
          start={0}
          stop={5}
          fractions={2}
          readonly={true}
        />


      </div>
    );
  }
}

export default ReviewDetail;
