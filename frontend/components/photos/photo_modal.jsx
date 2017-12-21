import React from 'react';
import Modal from 'react-modal';
import PhotoModalItem from './photo_modal_item';
import { Link } from 'react-router-dom';

class PhotoModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalOpen: true
    }

    Modal.setAppElement('body');
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.getPhoto(this.props.match.params.photoId)
  }

  closeModal(event) {
    event.preventDefault();
    this.props.history.goBack();
  }

  render() {
    if (!this.props.photo) { return null }

    return (
      <main>
        <div
          className="fa fa-times fa-lg"
          id="close-button"
          onClick={ this.closeModal }>
        </div>
        <Modal
          onRequestClose={ this.closeModal }
          className={
            {
              base: 'baseClass',
              afterOpen: '',
              beforeClose: ''
            }
          }
          overlayClassName={
            {
              base: 'overlay-base',
              afterOpen: 'overlay-default',
              beforeClose: ''
            }
          }
          isOpen={ this.state.modalOpen }>
          <PhotoModalItem photo={ this.props.photo }/>
        </Modal>
      </main>
    )
  }
}

export default PhotoModal;
