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

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.errors}
        <br/>
        <label>Email
          <input onChange={this.update("email")}
                 type="text"
                 value={this.state.email}>
          </input>
        </label>
        <br/>
        <label>Password
          <input onChange={this.update("password")}
                 type="password"
                 value={this.state.password}>
          </input>
        </label>
        <br/>
        <label>Temp Image Url Input As String
          <input onChange={this.update("image_url")}
                 type="text"
                 value={this.state.image_url}>
          </input>
        </label>
        <br/>
        <button>Sign Up!</button>

      </form>
    );
  }
}

export default SignUpForm;
