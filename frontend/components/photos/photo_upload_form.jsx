import React from 'react';
import { Link } from 'react-router-dom';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoCaption: "",
      imageFile: null,
      imageUrl: null,
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  updateFile(e) {
    const newFile = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({imageFile: newFile, imageUrl: fileReader.result })
    }

    if (newFile) {
      fileReader.readAsDataURL(newFile)
    }
  }

  handleInputChange(formField) {
    return (e) => {
      this.setState({ [formField]: e.target.value });
    };
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    formData.append('photo[caption]', this.state.photoCaption);
    formData.append('photo[image]', this.state.imageFile);

    this.props.addPhoto(formData).then((res) => {
      debugger
      this.props.history.push(`/users/${res.user.id}`)
    })
  }

  render() {
    return (
      <div className='photo-upload-form-container'>
        <div>
          <h2>Share your photo</h2>
        </div>
        <article className='photo-upload-form'>

          <div className='photo-caption-container'>
            <div>
              <textarea
                className='user-caption'
                value={this.state.caption}
                onChange={this.handleInputChange('photoCaption')}
                placeholder={'Write a caption'}
              />
            </div>

            <div className='label-container'>
              <input
                type='file'
                id='file'
                className='file-selector'
                onChange={this.updateFile}>
              </input>

              <label
                className='file-label'
                htmlFor='file'>
                Choose a file
              </label>
            </div>

            <div>
              <button className='file-submit-button'
                onClick={this.handleFormSubmit}>
                Share
              </button>
            </div>
          </div>

          <div className='photo-preview-container'>
            <img className='photo-preview' src={this.state.imageUrl} />
          </div>

        </article>
      </div>
    )
  }
}

export default PhotoUpload;
