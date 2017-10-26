import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fullname: "",
      username: "",
      password: ""
    };

    this.url = this.props.match.path;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
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

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  handleChange(formField) {
    return (e) => {
      this.setState({ [formField]: e.target.value });
    };
  }

  render() {

    let emailInput;
    let fullNameInput;
    let signUpWelcomeText;
    let signUpAgreementText;

    if (this.url === '/signup') {
      signUpWelcomeText = (
        <span className='entry-form-text'>
          Sign up and see amazing photos from your friends!
        </span>
      )

      signUpAgreementText = (
        <span className='entry-form-text'>
          By signing up, you agree to our <Link to={"/"}>Terms & Privacy Policy</Link>
        </span>
      )

      emailInput = (
        <div>
          <input
            className='session-form-input'
            type='text'
            value={this.state.email}
            onChange={this.handleChange('email')}
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
            onChange={this.handleChange('fullname')}
            placeholder='Full name'>
          </input>
          <br />
        </div>
      )
    };

    const buttonText = (this.url === '/signup') ?
                            'Sign Up' : 'Log In'

    const placeholder = (this.url === '/signup') ?
                            'Username' : 'Username or email'

    const alternateEntryText = (this.url === '/signup') ?
                'Have an account?' : "Don't have an account?"

    const alternateEntryLink = (this.url === '/signup') ?
      <Link to={'/login'}>Log In</Link> :
        <Link to={'/signup'}>Sign up</Link>

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
              <form onSubmit={this.handleSubmit} className='entry-form'>
                {fullNameInput}
                {emailInput}
                <input
                  className='session-form-input'
                  type='text'
                  value={this.state.username}
                  onChange={this.handleChange('username')}
                  placeholder={placeholder} >
                </input>
                <br />
                <input
                  className='session-form-input'
                  type='password'
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  placeholder='Password'>
                </input>
                <br />
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
    );
  }

}

export default SessionForm;
