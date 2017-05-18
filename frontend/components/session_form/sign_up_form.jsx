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
    // const user = Object.assign({}, this.state);
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
      <form className="authForm" onSubmit={this.handleSubmit}>
        {this.props.errors}
        <br/>

          <input className="authInputBox" onChange={this.update("email")}
                 type="text"
                 value={this.state.email}
                 placeholder='Email address'>
          </input>

        <br/>

          <input className="authInputBox" onChange={this.update("password")}
                 type="password"
                 value={this.state.password}
                 placeholder='Create a Password'>
          </input>

        <br/>

          <input className="authInputBox" onChange={this.update("image_url")}
                 type="text"
                 value={this.state.image_url}
                 placeholder='Profile Pic Image URL'>
          </input>

        <br/>
          <button className='sessionsButton'>Sign Up</button>
        <br/>
        <hr/>

        <div className="accountSwitch">
          <label>Already have an account?</label>
          <button className='changeFormsButton' onClick={this.switchForms}>Log in</button>
        </div>
      </form>
    );
  }
}

export default SignUpForm;
