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
    this.setState({ email: "" })
    this.setState({ fullname: "" })
    this.setState({ username: "" })
    this.setState({ password: "" })
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
                            'Username' : 'Username, or email'

    const alternateEntryText = (this.url === '/signup') ?
                'Already have an account?' : "Don't have an account?"

    const alternateEntryLink = (this.url === '/signup') ?
      <Link to={'/login'}>Log In</Link> :
        <Link to={'/signup'}>Sign up</Link>

    return (
      <article className='entry-screen'>
        <div className='entry-form'>
          <h2 className='title'>pxlgram</h2>
          {signUpWelcomeText}
          <form onSubmit={this.handleSubmit} className='session-form'>
            {fullNameInput}
            {emailInput}
            <input
              type='text'
              value={this.state.username}
              onChange={this.handleChange('username')}
              placeholder={placeholder} >
            </input>
            <br />
            <input
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
          {this.renderErrors()}
          {signUpAgreementText}
          <br />
          <span>
            {alternateEntryText} {alternateEntryLink}
          </span>
        </div>
      </article>
    );
  }

}

export default SessionForm;
