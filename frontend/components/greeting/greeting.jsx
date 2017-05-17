import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ModalStyle from '../session_form/modal_style';
import SignUpFormContainer from '../session_form/sign_up_form_container';
import LogInFormContainer from '../session_form/log_in_form_container';

class Greeting extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      SignUpmodalOpen: false,
      LogInmodalOpen: false,
    };
    this._handleSignUpClick = this._handleSignUpClick.bind(this);
    this._handleLogInClick = this._handleLogInClick.bind(this);
    this.onSignUpModalClose = this.onSignUpModalClose.bind(this);
    this.onLogInModalClose = this.onLogInModalClose.bind(this);
    this.demoLogIn = this.demoLogIn.bind(this);
  }

  _handleSignUpClick() { this.setState({ SignUpmodalOpen: true }); }
  onSignUpModalClose() { this.setState({ SignUpmodalOpen: false }); }

  _handleLogInClick() { this.setState({ LogInmodalOpen: true }); }
  onLogInModalClose() { this.setState({ LogInmodalOpen: false }); }

  demoLogIn(){
    this.props.login({ email: 'tom@myspace.com', password: 'password'});
  }

  render(){
    const loggedOutLinks = () => (
      <nav className="navBarElement">
        <Link className='navbarLink' to="/host">Become a Host</Link>
        <Link className='navbarLink' to="/help">Help</Link>
        <a className='navbarLink' href="#" onClick={this._handleSignUpClick} >Sign Up</a>
        <a className='navbarLink' href="#" onClick={this._handleLogInClick} >Log In</a>
        <a className='navbarLink' href="#" onClick={this.demoLogIn} >Demo Account</a>
      </nav>
    );

    const loggedInLinks = (currentUser, logout) => {
      const profilePic = currentUser.image_url === null ? currentUser.image_url : 'https://a3-images.myspacecdn.com/images03/1/240e42b5d9ce48a78983961e7fcb3c39/600x600.jpg'

      return (
        <div className="navBarElement">
          <Link className='navbarLink' to="/host">Become a Host</Link>
          <Link className='navbarLink' to="/trips">Trips</Link>
          <Link className='navbarLink' to="/messages">Messages</Link>
          <Link className='navbarLink' to="/help">Help</Link>

          <img className='pfpic' src={profilePic}></img>
          <a onClick={logout} href="#" >Sign Out</a>
        </div>
      );
    };

    const { currentUser, logout } = this.props;

    return (
      <div className="navBar">
        <img className="navBarElement, logo"
             src="http://vignette2.wikia.nocookie.net/marvelcinematicuniverse/images/a/ad/Avengers_Logo.png/revision/latest?cb=20160218131959"/>

           {currentUser ? loggedInLinks(currentUser, logout) : loggedOutLinks()}

        <Modal
          isOpen={this.state.SignUpmodalOpen}
          onRequestClose={this.onSignUpModalClose}
          style={ModalStyle}
          contentLabel="SignUpModal"
          >
          <button onClick={this.onSignUpModalClose}>X</button>
          <SignUpFormContainer/>
        </Modal>

        <Modal
          isOpen={this.state.LogInmodalOpen}
          onRequestClose={this.onLogInModalClose}
          style={ModalStyle}
          contentLabel="LogInModal"
          >
          <button onClick={this.onLogInModalClose}>X</button>
          <LogInFormContainer/>
        </Modal>

      </div>
    );
  }
}
export default Greeting;