import React from 'react';
import { Link } from 'react-router-dom';

class EditUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      updateSuccess: false,
      avatar: null,
      updatingUser: false,
      avatarUrl: this.props.user.avatarUrl,
      fullname: this.props.user.fullname,
      username: this.props.user.username,
      email: this.props.user.email,
      bio: this.props.user.bio || "",
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentWillUnmount() {
    this.props.clearUserErrors();
  }

  updateFile(e) {
    event.preventDefault();
    const newFile = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({
        avatar: newFile,
        avatarUrl: fileReader.result
      })
    }

    if (newFile) {
      fileReader.readAsDataURL(newFile)
    }
  }

  handleInputChange(formField) {
    return (event) => {
      this.setState({ [formField]: event.target.value });
    };
  }

  renderMessage() {
    if (this.state.updateSuccess) {
      return (
        <li
          className='success-message'>
          Profile updated!
        </li>
      )
    } else {
      return (
        this.props.userErrors.map((error, idx) => {
          return <li
            className='error-messages'
            key={`${idx}`}>
            { error }
          </li>
        })
      )
    }
  }

  handleUpdate() {
    event.preventDefault();
    this.setState( { updatingUser: true } )
    const formData = new FormData();
    const that = this;

    const user = Object.assign(
      {},
      this.state,
      { username: this.state.username.toLowerCase() }
    );

    Object.keys(user).forEach((attr) => {
      if (user[attr] !== null) {
        formData.append(`user[${attr}]`, user[attr])
      }
    })
    this.props.clearUserErrors();
    this.props.editUser(formData).then(
      success => this.setState( { updateSuccess: true, updatingUser: false } ),
      errors => this.setState( { updateSuccess: false, updatingUser: false } )
    )
  }

  handleBack() {
    event.preventDefault();
    this.props.history.push(`/${this.props.user.username}`)
  }

  render() {

    return (
      <div className='edit-page-container' >
        <main className='edit-page' >

          <article className='user-avatar-container'>
            <div className='user-avatar'>
              <input
                type='file'
                id='avatar-file-selector'
                onChange={this.updateFile}>
              </input>
              <img className='avatar' src={ this.state.avatarUrl }/>
            </div>
          </article>

          <article className='user-info'>

            <div className='edit-section'>
              <aside className='form-field'><label>Name</label></aside>
              <input
                className='edit-form-input'
                type='text'
                onChange={this.handleInputChange('fullname')}
                value={ this.state.fullname }>
              </input>
            </div>

            <div className='edit-section'>
              <aside className='form-field'><label>Username</label></aside>
              <input
                className='edit-form-input'
                type='text'
                onChange={this.handleInputChange('username')}
                value={this.state.username}>
              </input>
            </div>

            <div className='edit-section'>
              <aside className='form-field'><label>Email</label></aside>
              <input
                className='edit-form-input'
                type='text'
                onChange={this.handleInputChange('email')}
                value={ this.state.email }>
              </input>
            </div>

            <div className='edit-section'>
              <aside className='form-field'><label>Bio</label></aside>
              <textarea
                className='edit-form-input'
                id='bio-input'
                onChange={this.handleInputChange('bio')}
                value={ this.state.bio }>
              </textarea>
            </div>
          </article>

          <ul className='user-errors'>
            { this.renderMessage()}
          </ul>

          <article
            className='edit-page-buttons-container'>
            <button
              className={ this.state.updatingUser ?
                'edit-page-buttons locked' : 'edit-page-buttons' }
              onClick={ this.handleUpdate }>
              Submit
            </button>
            <button
              className='edit-page-buttons'
              onClick={ this.handleBack }>
              Back
            </button>
          </article>

        </main>
      </div>
    )
  }

}

export default EditUser;
