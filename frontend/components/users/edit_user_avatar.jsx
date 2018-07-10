import React from 'react';

class EditUserAvatar extends React.Component {

  state = { avatarUrl: this.props.avatarUrl }

  updateFile(e) {
    event.preventDefault();
    const newAvatarFile = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ avatarUrl: fileReader.result });
      this.props.onAvaChange(newAvatarFile);
    };

    if (newAvatarFile) { fileReader.readAsDataURL(newAvatarFile); }
  }

  render() {
    return (
      <article className='user-avatar-container'>
        <div className='user-avatar'>
          <input
            type='file'
            id='avatar-file-selector'
            onChange={this.updateFile.bind(this)}>
          </input>
          <img className='avatar' src={ this.state.avatarUrl }/>
        </div>
      </article>
    );
  }
}

export default EditUserAvatar;
