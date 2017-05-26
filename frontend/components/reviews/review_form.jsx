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
    this.setState({body: e.currentTarget.value.charAt(0).toUpperCase() +
                         e.currentTarget.value.slice(1)
    });
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
    this.setState({
      rating: null,
      body: null
    });
    document.getElementById("review-text").value="";
  }

  render() {

    const errors = this.props.errors.responseText ?
                    this.props.errors.responseText :
                    ''

    return (
      <form className='review-form'>

        <div className='review-top'>
          <div className='review-form-title'>Have you stayed here before?</div>
            <div>Leave a rating and review below!</div>
            <Rating
              placeholderRate={this.state.rating}
              start={0}
              stop={10}
              onChange={ (rate) => {
                this.setState({rating: rate});
              }}
              placeholder={ <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Yellow_star.svg/2000px-Yellow_star.svg.png" className=".form-circle" />}
              full={ <img src="http://www.freeiconspng.com/uploads/white-star-icon-11.png" />}
            />
        </div>

          { errors }

          <br/>
          <div className='comment-submit-row'>
            <textarea
                   id='review-text'
                   onChange={ this.handleBodyInput }
                   className='review-text'
                   placeholder='Write a comment'>
            </textarea>
            <button className='comment-submit' onClick={ this.handleSubmit }>Submit</button>
          </div>
      </form>

    );
  }
}

export default ReviewForm;
