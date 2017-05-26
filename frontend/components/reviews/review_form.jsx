import React from 'react';
import Rating from 'react-rating';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      body: null
    };
    this.handleBodyInput = this.handleBodyInput.bind(this);
    this.handleRatingInput = this.handleRatingInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBodyInput(e) {
    this.setState({body: e.currentTarget.value});
  }

  handleRatingInput(rating) {
    this.setState({rating: rating});
  }

  handleSubmit() {
    const review = {  author_id: this.props.currentUser.id,
                      listing_id: this.props.listing_id,
                      rating: this.state.rating,
                      body: this.state.body
    };
    this.props.addReview({review: review});
    console.log(review);
  }


  render() {
    return (
      <form className='review-form'>
        <div className='review-form-title'>Have you stayed here before? Leave a review!</div>

          {this.props.listing_id}

          <Rating
            placeholderRate={this.state.rating}
            start={0}
            stop={5}
            fractions={2}
            onChange={ (rate) => {
              this.setState({rating: rate});
            }}
          />

          <br/>

          <input type='text'
                 onChange={ this.handleBodyInput }
                 className='review-text'
                 placeholder='Write a comment'>
          </input>

          <button onClick={ this.handleSubmit }>Submit</button>
      </form>

    );
  }
}

export default ReviewForm;
