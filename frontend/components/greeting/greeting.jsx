import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ModalStyle from '../../../app/assets/stylesheets/header/modal_style';
import SignUpFormContainer from '../session_form/sign_up_form_container';
import LogInFormContainer from '../session_form/log_in_form_container';
import SearchBarContainer from '../listings/search_bar_container';
import { withRouter } from 'react-router';

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
    this.logOutRedirect = this.logOutRedirect.bind(this);
  }

  _handleSignUpClick() { this.setState({ SignUpmodalOpen: true }); }
  onSignUpModalClose() { this.setState({ SignUpmodalOpen: false }); }

  _handleLogInClick() { this.setState({ LogInmodalOpen: true }); }
  onLogInModalClose() { this.setState({ LogInmodalOpen: false }); }

  // onSignUpModalClose() {
  //   this.setState({ SignUpmodalOpen: false });
  //   ModalStyle.content.opacity = 0;
  //   console.log("inside close");
  // }
  //
  // onLogInModalClose() {
  //   this.setState({ LogInmodalOpen: false });
  //   ModalStyle.content.opacity = 0;
  //   console.log("inside close");
  // }
  //
  // afterModalOpen() {
  //   ModalStyle.content.opacity = 100;
  // }

  demoLogIn() {
    this.props.login({ email: 'tom@myspace.com', password: 'password'});
  }

  logOutRedirect() {
    this.props.logout()
    .then(this.props.history.push(`/`));
  }

  render(){
    const loggedOutLinks = () => (
      <nav className="nav-bar-session-links">
        <Link to="/host">Become a Host</Link>
        <Link to="/help">Help</Link>
        <a style={{cursor:'pointer'}} onClick={this._handleSignUpClick} >Sign Up</a>
        <a style={{cursor:'pointer'}} onClick={this._handleLogInClick} >Log In</a>
        <a style={{cursor:'pointer'}} onClick={this.demoLogIn} >Demo Account</a>
      </nav>
    );

    const loggedInLinks = (currentUser, logout) => {
      const profilePic = currentUser.image_url ? currentUser.image_url : 'https://a3-images.myspacecdn.com/images03/1/240e42b5d9ce48a78983961e7fcb3c39/600x600.jpg'

      return (
        <div className="nav-bar-session-links">
          <Link to="/host">Become a Host</Link>
          <Link to="/trips">Trips</Link>
          <Link to="/messages">Messages</Link>
          <Link to="/help">Help</Link>
          <img className='pf-pic' src={profilePic}></img>
          <a onClick={logout} style={{cursor:'pointer'}} >Sign Out</a>
        </div>
      );
    };

    const { currentUser, logout } = this.props;

    // https://goo.gl/8wkAJj

    return (
      <div className="nav-bar-container">
        <div className="nav-bar">

          <Link to="/">
              <img className="logo"
               src="http://vignette2.wikia.nocookie.net/marvelcinematicuniverse/images/a/ad/Avengers_Logo.png/revision/latest?cb=20160218131959"/>
          </Link>
          <SearchBarContainer />

          {currentUser ? loggedInLinks(currentUser, this.logOutRedirect) : loggedOutLinks()}

          <Modal className="modal"
            isOpen={this.state.SignUpmodalOpen}
            onRequestClose={this.onSignUpModalClose}
            onAfterOpen={this.afterModalOpen}
            style={ModalStyle}
            contentLabel="SignUpModal"
            >
            <button onClick={this.onSignUpModalClose}>X</button>
            <SignUpFormContainer closeModal={this.onSignUpModalClose} logInModal={this._handleLogInClick}/>
          </Modal>

          <Modal className="modal"
            isOpen={this.state.LogInmodalOpen}
            onRequestClose={this.onLogInModalClose}
            onAfterOpen={this.afterModalOpen}
            style={ModalStyle}
            contentLabel="LogInModal"
            >
            <button onClick={this.onLogInModalClose}>X</button>
            <LogInFormContainer closeModal={this.onLogInModalClose} signUpModal={this._handleSignUpClick}/>
          </Modal>

        </div>
      </div>
    );
  }
}
export default withRouter(Greeting);
