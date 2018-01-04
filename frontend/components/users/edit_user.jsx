import React from 'react';
import { Link } from 'react-router-dom';

class EditUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userLoaded: false,
      avatarFile: null,
      avatarUrl: null,
      fullname: "",
      username: "",
      email: "",
      bio: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.username).then(
      () => { this.setState( {
        userLoaded: true,
        avatarUrl: this.props.user.avatarUrl,
        fullname: this.props.user.fullname,
        username: this.props.user.username,
        email: this.props.user.email,
        bio: this.props.user.bio
      } ) }
    );
  }

  handleInputChange(formField) {
    return (event) => {
      this.setState({ [formField]: event.target.value });
    };
  }

  handleSave() {
    event.preventDefault();
    
  }

  handleCancel() {
    event.preventDefault();
    this.props.history.push(`/${this.props.user.username}`)
  }

  render() {

    if (!this.state.userLoaded) {
      return null;
    }

    return (
      <div className='edit-page-container' >
        <main className='edit-page' >

          <article className='user-avatar-container'>
            <div className='user-avatar'>
              <img className='avatar' src={ this.state.avatarUrl } />
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

          <article
            className='edit-page-buttons-container'>
            <button
              onClick={ this.handleSave }
              className='edit-page-buttons'>
              Save
            </button>
            <button
              className='edit-page-buttons'
              onClick={ this.handleCancel }>
              Cancel
            </button>
          </article>

        </main>
      </div>
    )
  }

}

export default EditUser;
