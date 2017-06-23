import React from 'react';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      image_url: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.switchForms = this.switchForms.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup(user).then(this.props.closeModal);
  }

  switchForms(e) {
    e.preventDefault();
    this.props.closeModal();
    this.props.logInModal();
  }

  render(){
    return (
      <form className="auth-form" onSubmit={this.handleSubmit}>
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
                 placeholder='Create a Password'>
          </input>

        <br/>

          <input className="email-promos-button" type="checkbox"></input>
          <label className="email-promos-text">I’d like to receive coupons, promotions, surveys, and updates via email about AirBadnBoujee and its partners</label>

        <br/>
          <button className='sessions-button'>Sign Up</button>
        <br/>
        <hr/>

        <div className="account-switch">
          <label>Already have an account?</label>
          <button className='change-forms-button' onClick={this.switchForms}>Log in</button>
        </div>
      </form>
    );
  }
}

export default SignUpForm;

// <input className="auth-input-box" onChange={this.update("image_url")}
//        type="text"
//        value={this.state.image_url}
//        placeholder='Profile Pic Image URL'>
// </input>
