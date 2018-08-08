import React from 'react';
import EditUserAvatar from './edit_user_avatar';
import HeaderNavBar from '../navbar/navbar';

const inputFields = ["Full Name", "Username", "Email"];

class EditUser extends React.Component {

  constructor(props) {
    super(props);

    const { fullname, username, email, bio } = this.props.user;

    this.state = {
      updateSuccess: false,
      updatingUser: false,
      avatar: null,
      fullname,
      username,
      email,
      bio: bio || "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentWillUnmount() {
    this.props.clearUserErrors();
  }

  handleInputChange(formField) {
    return event => {
      this.setState({ [formField]: event.target.value });
    };
  }

  renderInputField(field) {
    const fieldValue = field.replace(/ /g,'').toLowerCase();
    field = (field === 'Full Name') ? 'Name' : field;

    return (
      <div key={field} className='edit-section'>
        <aside className='form-field'><label>{`${field}`}</label></aside>
        <input
          className='edit-form-input'
          type='text'
          onChange={this.handleInputChange(fieldValue)}
          value={ this.state[fieldValue] }>
        </input>
      </div>
    );
  }

  renderMessage() {
    if (this.state.updateSuccess) {
      return <li className='success-message'>Profile updated!</li>;
    } else {
      return (
        this.props.userErrors.map((error, idx) => {
          return (
            <li
              className='error-messages'
              key={`${idx}`}>
              { error }
            </li>
          );
        })
      );
    }
  }

  handleUpdate() {
    event.preventDefault();
    this.setState( { updatingUser: true } );
    const formData = new FormData();

    const { username } = this.state;

    const user = {...this.state, username: username.toLowerCase()};

    Object.keys(user).forEach((attr) => {
      if (user[attr] !== null) {
        formData.append(`user[${attr}]`, user[attr]);
      }
    });
    this.props.clearUserErrors();
    this.props.editUser(formData).then(
      () => this.setState( { updateSuccess: true, updatingUser: false } ),
      () => this.setState( { updateSuccess: false, updatingUser: false } )
    );
  }

  handleBack() {
    event.preventDefault();
    this.props.history.push(`/${this.props.user.username}`);
  }

  updateAvatar(avatar) {
    this.setState({
      avatar
    });
  }

  render() {

    return (
      <main id='edit-page-container' className='main-wrapper'>
        <HeaderNavBar />
        <div id='edit-panel'>
          <EditUserAvatar
            onAvaChange={avatar => this.updateAvatar(avatar)}
            avatarUrl={this.props.user.avatarUrl} />

          <article className='user-info'>

            {inputFields.map(field => {
              return this.renderInputField(field);
            })}

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
            {this.renderMessage()}
          </ul>

          <article id='edit-options-container'>
            <button
              className={ this.state.updatingUser ?
                'edit-page-buttons locked' : 'edit-page-buttons' }
              onClick={ this.handleUpdate }>
              Submit
            </button>
            <button className='edit-page-buttons' onClick={ this.handleBack }>
              Back
            </button>
          </article>

        </div>
      </main>
    );
  }

}

export default EditUser;
