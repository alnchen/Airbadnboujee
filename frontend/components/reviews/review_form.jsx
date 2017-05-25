import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      body: null
    };
    this.handleBodyInput = this.handleBodyInput.bind(this);
  }

  handleBodyInput(e) {
    this.setState({body: e.currentTarget.value});
    console.log(this.state);
  }

  handleAddReview() {
    const review = {  author_id: this.props.currentUser.id,
                      listing_id: this.props.listing.id,
                      rating: this.state.rating,
                      body: this.state.body
    }
  }


  render() {
    return (
      <form className='review-form'>
        <div>TEST</div>
        <div className='review-form-title'>Have you stayed here before? Leave a review!</div>

        <input type='text'
               onChange={ this.handleBodyInput }
               className='review-text'
               placeholder='Write a comment'>
        </input>

        
      </form>
    );
  }
}

export default ReviewForm;
