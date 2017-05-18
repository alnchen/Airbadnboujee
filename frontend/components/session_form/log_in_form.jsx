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
    this.props.login(user).then(this.props.closeModal);
  }

  switchForms(e) {
    e.preventDefault();
    this.props.closeModal();
    this.props.signUpModal();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
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

        <button className='sessionsButton'>Log In!</button>
        <label>Don't have an account?</label>
        <button className='changeFormsButton' onClick={this.switchForms}>Sign Up</button>
      </form>
    );
  }
}

export default LogInForm;
