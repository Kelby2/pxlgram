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
      this.props.history.push(`/${res.user.username}`)
    })
  }

  render() {
    return (
      <div className='photo-upload-form-container'>

          <article className='photo-upload-form'>

            <div className='photo-caption-container'>

              <div className='update-caption-container'>
                <textarea
                  className='user-caption'
                  value={this.state.caption}
                  onChange={this.handleInputChange('photoCaption')}
                  placeholder='Write a caption...'
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

              <div className='file-submit-button-container'>
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
