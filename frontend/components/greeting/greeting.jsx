import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ModalStyle from '../session_form/modal_style';
import SignUpFormContainer from '../session_form/sign_up_form_container';

class Greeting extends React.Component{
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this._handleClick = this._handleClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }

  _handleClick() {
    this.setState({ modalOpen: true });
  }

  onModalClose(){
    this.setState({ modalOpen: false });
  }

  render(){
    const loggedOutLinks = () => (
      <nav className="navBarElement">
        <Link className='navbarLink' to="/host">Become a Host</Link>
        <Link className='navbarLink' to="/help">Help</Link>
        <a className='navbarLink' href="#" onClick={this._handleClick} >Sign Up</a>
        <a className='navbarLink' href="#" onClick={this._handleClick} >Log In</a>
      </nav>
    );

    const loggedInLinks = (currentUser, logout) => (
      <div className="navBarElement">
        <Link className='navbarLink' to="/host">Become a Host</Link>
        <Link className='navbarLink' to="/trips">Trips</Link>
        <Link className='navbarLink' to="/messages">Messages</Link>
        <Link className='navbarLink' to="/help">Help</Link>
        <img className='pfpic' src={currentUser.image_url}></img>
        <a onClick={logout}>Sign Out</a>
      </div>
    );

    const { currentUser, logout } = this.props;

    return (
      <div className="navBar">
        <img className="navBarElement, logo"
             src="http://vignette2.wikia.nocookie.net/marvelcinematicuniverse/images/a/ad/Avengers_Logo.png/revision/latest?cb=20160218131959"/>

      {currentUser ? loggedInLinks(currentUser, logout) : loggedOutLinks()}



        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}
          contentLabel="Modal"
          >
          <button onClick={this.onModalClose}>Close</button>
          <SignUpFormContainer/>
        </Modal>

      </div>
    );
  }
}
export default Greeting;
