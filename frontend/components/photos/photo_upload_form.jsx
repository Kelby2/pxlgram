import React from 'react';
import { Link } from 'react-router-dom';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoCaption: "",
      imageFile: null,
      imageUrl: 'https://images.unsplash.com/photo-1504619988368-2911f094bac5?auto=format&fit=crop&w=1650&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentWillUnmount() {
    this.props.clearPhotoErrors();
  }

  renderErrors() {
    return (
      this.props.photoErrors.map((error, idx) => {
        return <li
          className='errorMessages'
          key={`${idx}`}>
          { error }
        </li>
      })
    )
  }

  updateFile(e) {
    const newFile = e.currentTarget.files[0];
    const fileReader = new FileReader();
    this.props.clearPhotoErrors();

    fileReader.onloadend = () => {
      this.setState({imageFile: newFile, imageUrl: fileReader.result })
    }

    if (newFile) {
      fileReader.readAsDataURL(newFile)
    }
  }

  handleInputChange() {
    return (e) => {
      this.setState({ photoCaption: e.target.value });
    };
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('photo[caption]', this.state.photoCaption);
    formData.append('photo[image]', this.state.imageFile);

    this.props.addPhoto(formData).then((result) => {
      this.props.history.push(`/${result.photo.author_name}`)
    });
  }

  render() {
    return (
      <div className='photo-upload-form-container'>

          <main className='photo-upload-form'>
            <div className='photo-caption-container'>

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
                    className='file-upload-buttons'
                    htmlFor='file-selector'>
                    Choose a file
                  </label>
                </div>

                <div className='file-submit-button-container'>
                  <button className='file-upload-buttons'
                    onClick={this.handleFormSubmit}>
                    Share
                  </button>
                </div>

              </article>
            </div>

            <div className='photo-preview-container'>
              <img className='photo-preview' src={ this.state.imageUrl } />
            </div>
          </main>
      </div>
    )
  }
}

export default PhotoUpload;
