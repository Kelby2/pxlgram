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

    if (this.url === '/signup') {
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

    const alternateEntryLink = (this.url === '/signup') ?
      <Link to={'/login'}>Log In</Link> : <Link to={'/signup'}>Sign up</Link>

    const alternateEntryText = (this.url === '/signup') ?
                'Already have an account?' : "Don't have an account?"

    return (
      <article className='entry-screen'>
        <div className='entry-form'>
          <h2 className='title'>pxlgram beta</h2>
          <span>Sign up to see amazing photos from your friends!</span>
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
            <input className='submitButton' type='submit' value={buttonText} />
          </form>

          <span>
            {alternateEntryText} {alternateEntryLink}
          </span>
        </div>
      </article>
    );
  }

}

export default SessionForm;
