import React from 'react';
import HeaderNavBar from '../navbar/navbar';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadingPhoto: false,
      photoCaption: "",
      imageFile: null,
      imageUrl: 'https://s3.us-east-2.amazonaws.com/kelbylu-pxlgram-dev/users/avatars/000/000/photo-upload.jpeg'
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateFile = this.updateFile.bind(this);
    document.title = "Share ∙ pxlg;"
  }

  componentWillUnmount() {
    this.props.clearPhotoErrors();
  }

  renderErrors() {
    return (
      this.props.photoErrors.map((error, idx) => {
        return <li
          className='error-messages'
          key={`${idx}`}>
          { error }
        </li>;
      })
    );
  }

  updateFile(e) {
    const newFile = e.currentTarget.files[0];
    const fileReader = new FileReader();
    this.props.clearPhotoErrors();

    fileReader.onloadend = () => {
      this.setState({imageFile: newFile, imageUrl: fileReader.result });
    };

    if (newFile) {
      fileReader.readAsDataURL(newFile);
    }
  }

  handleInputChange() {
    return (e) => {
      this.setState({ photoCaption: e.target.value });
    };
  }

  handleFormSubmit() {
    event.preventDefault();
    this.setState({ uploadingPhoto: true });
    const formData = new FormData();
    formData.append('photo[caption]', this.state.photoCaption);
    formData.append('photo[image]', this.state.imageFile);

    this.props.addPhoto(formData).then((result) => {
      this.setState({ uploadingPhoto: false });
      this.props.history.push(`/${result.photo.author_name}`);
    }, () => this.setState({ uploadingPhoto: false }));
  }

  render() {
    return (
      <main id='photo-upload-wrapper' className='main-wrapper'>
        <HeaderNavBar />
        <section id='photo-upload-form'>
          <div id='photo-caption-container'>

            <article className='update-caption-container'>
              <textarea
                className='user-caption'
                value={ this.state.caption }
                onChange={ this.handleInputChange() }
                placeholder='Write a caption...'
              />
            </article>

            <ul>
              { this.renderErrors() }
            </ul>

            <article
              className='upload-buttons'>

              <div className='label-container'>
                <input
                  type='file'
                  id='file-selector'
                  onChange={this.updateFile}>
                </input>
                <label
                  className='photo-upload-buttons'
                  htmlFor='file-selector'>
                  Choose a file
                </label>
              </div>

              <div className='file-submit-button-container'>
                <button className={ this.state.uploadingPhoto ?
                  'photo-upload-buttons locked' : 'photo-upload-buttons'}
                  onClick={this.handleFormSubmit}>
                  Share
                </button>
              </div>

            </article>
          </div>

          <div id='photo-preview-container'>
            <img id='photo-preview-pane' src={ this.state.imageUrl } />
          </div>
        </section>
      </main>
    );
  }
}

export default PhotoUpload;
