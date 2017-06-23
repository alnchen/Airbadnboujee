import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ModalStyle from '../../../app/assets/stylesheets/header/modal_style';

class BookingIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cancelPromptOpen: false,
    };
    this.cancelTrip = this.cancelTrip.bind(this);
    this.onCancelModalClose = this.onCancelModalClose.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  onCancelModalClose() { this.setState({ cancelPromptOpen: false }); }
  handleCancelClick() { this.setState({ cancelPromptOpen: true }); }

  cancelTrip(id) {
    // const id = this.props.booking.id;
    return (e) => {
      this.props.deleteBooking(id);
      this.onCancelModalClose();
    };
  }

  render(){
    const { image_url, title, price, city } = this.props.booking.listing;
    const { guest, check_in, check_out, num_of_guests, id } = this.props.booking;

    const checkInMoment = new Date(check_in);
    const checkOutMoment = new Date(check_out);
    const diff = (checkOutMoment - checkInMoment)/(1000 * 3600 * 24);


    return (
      <div className='booking-index-item'>

        <div className='booking-image-container'>
          <Link id={title} to={`/listings/${this.props.booking.listing.id}`}>
            <img className='booking-index-pic' src={image_url}/>
          </Link>
        </div>

        <div className='booking-text'>
          <div className='booking-city'>{city}</div>
          <div>{check_in} - {check_out}</div>
          <div>Number of Guests: { num_of_guests }</div>
          <div>Nights: { diff }</div>
          <br/>
          <button className='cancel-button' onClick={ this.handleCancelClick }>Cancel Trip?</button>
            <Modal className="modal"
              isOpen={this.state.cancelPromptOpen}
              onRequestClose={this.onCancelModalClose}
              onAfterOpen={this.afterModalOpen}
              style={ModalStyle}
              contentLabel="SignUpModal"
              >
              <button className='modal-x'onClick={this.onCancelModalClose}>X</button>
              <div className='confirmation'>Are you sure you want to cancel this trip?</div>
              <div className='buttons-container'>
              <button onClick={ this.cancelTrip(id) } className='confirmation-yes'>Yes, process refund</button> <button onClick={ this.onCancelModalClose }className='confirmation-no'>No, keep reservation</button>
              </div>
            </Modal>
        </div>

      </div>
    );
  }
}


export default BookingIndexItem;
