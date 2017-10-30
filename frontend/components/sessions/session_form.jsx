import React from 'react';
import { Link } from 'react-router-dom';
import SignUpFormContainer from './signup_form_container'
import LoginFormContainer from './login_form_container'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {formType: 'signup'};
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm(event) {
    event.preventDefault();
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
      <div>
        <article className='entry-screen-container'>

          <div className='entry-photo-container'>
            <div className='entry-photo'></div>
          </div>
          <div className='entry-form-container'>
            {formToRender}

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

export default SessionForm;
