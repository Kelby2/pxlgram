import React from 'react';
import { Link } from 'react-router-dom';
import SignUpFormContainer from './signup_form_container'
import LoginFormContainer from './login_form_container'

class SessionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {formType: 'signup'};
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm(event) {
    event.preventDefault();
    this.props.clearSessionErrors();
    const newType = (this.state.formType === 'signup') ? 'login' : 'signup';
    this.setState({ formType: newType })
  }

  render() {

    let formToRender = (this.state.formType === 'signup') ?
      <SignUpFormContainer /> : <LoginFormContainer />

    const alternateEntryText = (this.state.formType === 'signup') ?
                'Have an account?' : "Don't have an account?"

    const alternateEntryLink = (this.state.formType === 'signup') ?
    <Link onClick={this.toggleForm} to={'/'}>Log In</Link> :
        <Link onClick={this.toggleForm} to={'/'}>Sign up</Link>

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
            {formToRender}

            <div id='alternate-form' className="main-entry-form">
              <span className='alternate-form-text'>
                {alternateEntryText} {alternateEntryLink}
              </span>
            </div>
          </aside>
        </article>
      </div>
    )
  }
}

export default SessionPage;
