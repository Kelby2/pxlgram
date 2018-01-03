import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
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
      this.props.sessionsErrors.map((error, idx) => {
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
    this.props.signup(user);
  }

  handleInputChange(formField) {
    return (e) => {
      this.setState({ [formField]: e.target.value });
    };
  }

  toggleForm(event) {
    event.preventDefault();
    this.props.clearSessionErrors();
    this.setState({ username: "",
                    password: "",
                    fullname: "",
                    email: ""})
  }

  handleDemoLogin(event) {
    event.preventDefault();
    const user = { username: 'friend', password: 'password' };
    this.props.login(user);
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
      </div>
    )

    const signUpWelcomeText = (
      <span className='entry-form-text'>
        Sign up and see amazing photos from your friends!
      </span>
    )

    const signUpAgreementText = (
      <span className='entry-form-text'>
        By signing up, you agree to our <div className='policy-terms'
        to={"/"}>Terms & Privacy Policy</div>
      </span>
    )

    const emailInput = (
      <div>
        <input
          className='session-form-input'
          type='text'
          value={this.state.email}
          onChange={this.handleInputChange('email')}
          placeholder='Email'>
        </input>
      </div>
    )

    const fullNameInput = (
      <div>
        <input
          className='session-form-input'
          type='text'
          value={this.state.fullname}
          onChange={this.handleInputChange('fullname')}
          placeholder='Full Name'>
        </input>
      </div>
    )

    return (
      <div className="main-entry-form" id='main-form'>
        <h2 className='title'>pxlgram</h2>
        <br />
        {signUpWelcomeText}
        <form onSubmit={this.handleFormSubmit} className='entry-form'>
          {emailInput}
          {fullNameInput}
          {usernameInput}
          {passwordInput}
          <input
            className='submitButton'
            type='submit'
            value='Sign Up' />
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
        {signUpAgreementText}
      </div>
    );
  }
}

export default SignUpForm;
