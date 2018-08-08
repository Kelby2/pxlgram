import React from 'react';
import DemoButton from './demo_button';

const inputFields = ['Email', 'Full Name', 'Username', 'Password'];

class SignUpForm extends React.Component {

  state = {
    email: '',
    fullname: '',
    username: '',
    password: ''
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  renderErrors() {
    return (
      this.props.sessionsErrors.map((error, idx) => {
        return (
          <li className='error-messages' key={`${idx}`}>
            {error}
          </li>
        );
      })
    );
  }

  handleFormSubmit() {
    event.preventDefault();
    const { username } = this.state;
    const user = {...this.state, username: username.toLowerCase()};
    this.props.signup(user);
  }

  handleInputChange(inputField) {
    return e => {
      this.setState({ [inputField]: e.target.value });
    };
  }

  renderInputField(field) {
    const fieldValue = field.replace(/ /g,'').toLowerCase();

    return (
      <input
        key={field}
        className='session-form-input'
        type={fieldValue === 'password' ? 'password' : 'text'}
        value={this.state[`${fieldValue}`]}
        onChange={this.handleInputChange(`${fieldValue}`).bind(this)}
        placeholder={field}
      />
    );
  }

  render () {
    return (
      <div className="main-entry-form" id='main-form'>
        <h2 className='title'>pxlgram</h2><br />
        <span className='entry-form-text'>
          Sign up to share and see amazing photos with your friends!
        </span>
        <form
          onSubmit={this.handleFormSubmit.bind(this)}
          className='entry-form'
        >
          {inputFields.map(field => {
            return this.renderInputField(field);
          })}
          <input
            className='submit-button'
            type='submit'
            value='Sign Up' />
            <DemoButton />
        </form>
        <ul>{this.renderErrors()}<br /></ul>
        <span className='entry-form-text'>
          By signing up, you agree to our
          <div className='policy-terms'>Terms & Privacy Policy</div>
        </span>
      </div>
    );
  }
}

export default SignUpForm;
