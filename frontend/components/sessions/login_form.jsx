import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      email: "",
      fullname: "",
      username: "",
      password: "",
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  renderErrors() {
    return (
      this.props.errors.session.map((error, idx) => {
        return <li
          className='errorMessages'
          key={`${idx}`}>
          {error}
        </li>
      })
    )
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const user = this.state;
    this.props.login(user);
  }

  handleDemoLogin(event) {
    event.preventDefault();
    const user = { username: 'friend', password: 'password' };
    this.props.login(user);
  }

  handleInputChange(formField) {
    return (event) => {
      this.setState({ [formField]: event.target.value });
    };
  }

  toggleForm(event) {
    event.preventDefault();
    this.props.clearErrors();
    this.setState({ username: "",
                    password: "",
                    fullname: "",
                    email: ""})
    }

  render () {
    const usernameInput = (
      <div>
        <input
          className='session-form-input'
          type='text'
          value={this.state.username}
          onChange={this.handleInputChange('username')}
          placeholder='Username'>
        </input>
        <br />
      </div>
    )

    const passwordInput = (
      <div>
        <input
          className='session-form-input'
          type='password'
          value={this.state.password}
          onChange={this.handleInputChange('password')}
          placeholder='Password'>
        </input>
        <br />
      </div>
    )

    return (

        <div className='main-entry-form' id="main-form">
          <h2 className='title'>pxlgram</h2>
          <br />
          <form onSubmit={this.handleFormSubmit} className='entry-form'>
            {usernameInput}
            {passwordInput}
            <input
              className='submitButton'
              type='submit'
              value='Log In' />
            <input
              onClick={this.handleDemoLogin}
              className='submitButton'
              type='submit'
              value='Demo Login' />
          </form>
          <ul>
            {this.renderErrors()}
            <br />
          </ul>
        </div>
    );
  }
}

export default LoginForm;
