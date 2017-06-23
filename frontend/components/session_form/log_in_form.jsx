import React from 'react';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.switchForms = this.switchForms.bind(this);
    this.guestLogIn = this.guestLogIn.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // const user = Object.assign({}, this.state);
    // this.setState({email: this.state.email.toLowerCase()});
    const user = this.state;
    this.props.login(user).then(this.props.closeModal);
  }

  guestLogIn() {
    this.props.login({ email: 'jerry@xanga.com', password: 'password'})
    .then(this.props.closeModal);
  }

  switchForms(e) {
    e.preventDefault();
    this.props.closeModal();
    this.props.signUpModal();
  }

  render(){
    return (
      <form className="auth-form">
        {this.props.errors}

          <input className="auth-input-box" onChange={this.update("email")}
                 type="text"
                 value={this.state.email}
                 placeholder='Email Address'>
          </input>

        <br/>

          <input className="auth-input-box" onChange={this.update("password")}
                 type="password"
                 value={this.state.password}
                 placeholder='Password'>
          </input>

          <input className="email-promos-button" type="checkbox"></input>
          <label className="email-promos-text">Keep me logged in</label>

        <br/>
          <button onClick={this.handleSubmit} className='sessions-button'>Log In</button>
          <button onClick={this.guestLogIn} className='sessions-demo-button'>Demo Account</button>
        <br/>
        <hr/>

          <div className="account-switch">
          <label>Don't have an account?</label>
          <button className='change-forms-button' onClick={this.switchForms}>Sign Up</button>
        </div>
      </form>
    );
  }
}

export default LogInForm;
