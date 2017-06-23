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
    this.afterModalOpen = this.afterModalOpen.bind(this);
  }

  _handleSignUpClick() { this.setState({ SignUpmodalOpen: true }); }
  _handleLogInClick() { this.setState({ LogInmodalOpen: true }); }

  onSignUpModalClose() {
    this.setState({ SignUpmodalOpen: false });
    ModalStyle.content.opacity = 0;
  }

  onLogInModalClose() {
    this.setState({ LogInmodalOpen: false });
    ModalStyle.content.opacity = 0;
  }

  afterModalOpen() {
    ModalStyle.content.opacity = 100;
  }

  demoLogIn() {
    this.props.login({ email: 'jerry@xanga.com', password: 'password'});
  }

  logOutRedirect() {
    this.props.logout();
    // .then(this.props.history.push(`/`));
  }

  render(){
    const loggedOutLinks = () => (
      <nav className="nav-bar-session-links">
        <a style={{cursor:'pointer'}} onClick={this._handleSignUpClick} >Sign Up</a>
        <a style={{cursor:'pointer'}} onClick={this._handleLogInClick} >Log In</a>
        <a style={{cursor:'pointer'}} onClick={this.demoLogIn} >Demo Account</a>
      </nav>
    );

    const loggedInLinks = (currentUser, logout) => {
      const profilePic = currentUser.image_url ? currentUser.image_url : 'https://d28rk61hailme.cloudfront.net/assets/default_user-856f2487c07862f3089cfcb1528df354.png'

      // <Link to="/">Help</Link>
      return (
        <div className="nav-bar-session-links">
          <Link to="/trips">Trips</Link>
          <a onClick={logout} style={{cursor:'pointer'}} >Sign Out</a>
          <img className='pf-pic' src={profilePic}></img>
        </div>
      );
    };

    const { currentUser, logout } = this.props;

    return (
      <div className="nav-bar-container">
        <div className="nav-bar">


          <div className='logo-container'>
            <Link to="/">
                <img className="logo"
                 src="https://res.cloudinary.com/ac31624/image/upload/v1498190080/logo21_ybhqxr.png"/>
            </Link>
          </div>
          <SearchBarContainer />

          {currentUser ? loggedInLinks(currentUser, this.logOutRedirect) : loggedOutLinks()}

          <Modal
            className="modal"
            isOpen={this.state.SignUpmodalOpen}
            onRequestClose={this.onSignUpModalClose}
            onAfterOpen={this.afterModalOpen}
            style={ModalStyle}
            contentLabel="SignUpModal"
            closeTimeoutMS={200}
            >
            <button className='modal-x'onClick={this.onSignUpModalClose}>X</button>
            <SignUpFormContainer closeModal={this.onSignUpModalClose} logInModal={this._handleLogInClick}/>
          </Modal>

          <Modal
            className="modal"
            isOpen={this.state.LogInmodalOpen}
            onRequestClose={this.onLogInModalClose}
            onAfterOpen={this.afterModalOpen}
            style={ModalStyle}
            contentLabel="LogInModal"
            closeTimeoutMS={200}
            >
            <button className='modal-x'onClick={this.onLogInModalClose}>X</button>
            <LogInFormContainer closeModal={this.onLogInModalClose} signUpModal={this._handleSignUpClick}/>
          </Modal>

        </div>
      </div>
    );
  }
}
export default withRouter(Greeting);
