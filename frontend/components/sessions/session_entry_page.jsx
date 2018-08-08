import React from 'react';
import SignUpFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';

class SessionEntryPage extends React.Component {

  state = { newUser: true }

  toggleForm() {
    event.preventDefault();
    this.setState({ newUser : !this.state.newUser });
  }

  renderForm() {
    return this.state.newUser ?
      <SignUpFormContainer /> :
        <LoginFormContainer />;
  }

  renderFormToggler() {
    const { newUser } = this.state;

    return (
      <div id='alternate-form' className="auth-text-container">
        <p className='auth-text' id='form-toggle-text'>
          { newUser ?
            'Have an account? ' :
            "Don't have an account? "}
          <span id='form-toggle-link' onClick={this.toggleForm.bind(this)}>
            { newUser ? 'Log In' : 'Sign up'}
          </span>
        </p>
      </div>
    );
  }

  render() {
    return (
      <article id='entry-screen'>
        <aside id='entry-photo-container'>
          <div id='background-photo'>
            <img src="https://s3.us-east-2.amazonaws.com/kelbylu-pxlgram-pro/photos/images/000/000/ig-backdrop.png"></img>
            <div id='pxlg-img-container'>
              <img src="https://s3.us-east-2.amazonaws.com/kelbylu-pxlgram-dev/pxlgram_content.png"></img>
            </div>
          </div>
        </aside>

        <aside id='auth-form-container'>
          {this.renderForm()}
          {this.renderFormToggler()}
        </aside>
      </article>
    );
  }
}

export default SessionEntryPage;
