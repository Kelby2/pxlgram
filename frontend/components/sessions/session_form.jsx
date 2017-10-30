import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fullname: "",
      username: "",
      password: "",
      formType: `${this.props.formType}`
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  renderErrors() {
    return (
      this.props.errors.session.map((error, idx) => {
        if (error === "Fullname can't be blank") {
          error = "Full name can't be blank"
        };

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
    const processForm = (this.state.formType === 'signup') ?
                this.props.signup : this.props.login
    processForm(user);
  }

  handleDemoLogin(event) {
    event.preventDefault();
    const user = { username: 'admin', password: 'password' };
    this.props.login(user);
  }

  handleInputChange(formField) {
    return (e) => {
      this.setState({ [formField]: e.target.value });
    };
  }

  handleFormChange(event) {
    event.preventDefault();
    const newType = (this.state.formType === 'signup') ? 'login' : 'signup';
    this.props.clearErrors();
    this.setState({ formType: newType,
                    username: "",
                    password: "",
                    fullname: "",
                    email: ""})
  }

  render() {
    debugger
    let emailInput;
    let fullNameInput;
    let signUpWelcomeText;
    let signUpAgreementText;
    let mainForm;

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

    if (this.state.formType === 'signup') {
      signUpWelcomeText = (
        <span className='entry-form-text'>
          Sign up and see amazing photos from your friends!
        </span>
      )

      signUpAgreementText = (
        <span className='entry-form-text'>
          By signing up, you agree to our <Link className='policy-terms'
          to={"/"}>Terms & Privacy Policy</Link>
        </span>
      )

      emailInput = (
        <div>
          <input
            className='session-form-input'
            type='text'
            value={this.state.email}
            onChange={this.handleInputChange('email')}
            placeholder='Email'>
          </input>
          <br />
        </div>
      )

      fullNameInput = (
        <div>
          <input
            className='session-form-input'
            type='text'
            value={this.state.fullname}
            onChange={this.handleInputChange('fullname')}
            placeholder='Full name'>
          </input>
          <br />
        </div>
      )

    }

    const buttonText = (this.state.formType === 'signup') ?
                            'Sign Up' : 'Log In'

    const alternateEntryText = (this.state.formType === 'signup') ?
                'Have an account?' : "Don't have an account?"

    const alternateEntryLink = (this.state.formType === 'signup') ?
    <Link onClick={this.handleFormChange} to={'/'}>Log In</Link> :
        <Link onClick={this.handleFormChange} to={'/'}>Sign up</Link>


    if (this.state.formType === 'signup') {
      return (
        <div>
          <article className='entry-screen-container'>

            <div className='entry-photo-container'>
              <div className='entry-photo'></div>
            </div>

            <div className='entry-form-container'>
              <div className='main-form'>
                <h2 className='title'>pxlgram</h2>
                <br />
                {signUpWelcomeText}
                <form onSubmit={this.handleFormSubmit} className='entry-form'>
                  {fullNameInput}
                  {emailInput}
                  {usernameInput}
                  {passwordInput}
                  <input
                    className='submitButton'
                    type='submit'
                    value={buttonText} />
                </form>
                <ul>
                  {this.renderErrors()}
                  <br />
                </ul>
                {signUpAgreementText}
              </div>

              <div className='alternate-form'>
                <span className='alternate-form-text'>
                  {alternateEntryText} {alternateEntryLink}
                </span>
              </div>
            </div>

          </article>
        </div>
      )} else {
        return (
          <div>
            <article className='entry-screen-container'>

              <div className='entry-photo-container'>
                <div className='entry-photo'></div>
              </div>

              <div className='entry-form-container'>
                <div className='main-form'>
                  <h2 className='title'>pxlgram</h2>
                  <br />
                  <form onSubmit={this.handleFormSubmit} className='entry-form'>
                    {usernameInput}
                    {passwordInput}
                    <input
                      className='submitButton'
                      type='submit'
                      value={buttonText} />
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

                <div className='alternate-form'>
                  <span className='alternate-form-text'>
                    {alternateEntryText} {alternateEntryLink}
                  </span>
                </div>
              </div>
          </article>
        </div>
        )
      }
  }

}

export default SessionForm;
