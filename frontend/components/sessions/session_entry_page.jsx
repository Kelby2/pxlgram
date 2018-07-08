import React from 'react';
import { Link } from 'react-router-dom';
import SignUpFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';

class SessionEntryPage extends React.Component {

  state = { newUser: true }

  toggleForm() {
    event.preventDefault();
    this.props.clearSessionErrors();
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
      <div id='alternate-form' className="main-entry-form">
        <span className='alternate-form-text'>
          { newUser ?
            'Have an account? ' :
            "Don't have an account? "}
          <Link onClick={this.toggleForm.bind(this)} to={'/'}>
            { newUser ? 'Log In' : 'Sign up'}
          </Link>
        </span>
      </div>
    );
  }

  render() {
    return (
      <div className='entry-screen'>
        <article className='entry-screen-container'>
          <aside className='entry-photo-container'>
            <div className='background-photo'>
              <img src="https://s3.us-east-2.amazonaws.com/kelbylu-pxlgram-pro/photos/images/000/000/ig-backdrop.png"></img>
              <div className='pxlgram-photo'>
                <img src="https://s3.us-east-2.amazonaws.com/kelbylu-pxlgram-dev/pxlgram_content.png"></img>
              </div>
            </div>
          </aside>

          <aside className='entry-form-container'>
            {this.renderForm()}
            {this.renderFormToggler()}
          </aside>
        </article>
      </div>
    );
  }
}

export default SessionEntryPage;
