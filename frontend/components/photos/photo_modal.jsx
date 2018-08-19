import React from 'react';
import Modal from 'react-modal';
import PhotoModalItem from './photo_modal_item';

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: true,
      photoFetched: false,
    };

    history.pushState(
      {}, 'photo', `#/photos/${props.photo.id}?taken-by=${props.photo.author_name}`
    );
    Modal.setAppElement('body');
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.getPhoto(this.props.photoId)
      .then(() => this.setState({ photoFetched: true }));
  }

  closeModal() {
    if (this.props.fromProfile) {
      history.pushState(
        {}, 'user', `#/${this.props.photo.author_name}`
      );
    } else {
      history.pushState({}, 'explore', '#/explore');
    }
    this.props.onModalClose();
    this.setState({
      modalOpen: false
    });
  }

  render() {
    if (!this.props.photo || !this.state.photoFetched) { return null; }

    return (
      <main>
        <div
          className="fa fa-times fa-lg"
          id="close-button"
          onClick={this.closeModal}>
        </div>
        <Modal
          htmlOpenClassName='ReactModal__Html--open'
          onRequestClose={this.closeModal}
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
          isOpen={this.state.modalOpen}>
          <PhotoModalItem
            fromProfile={this.props.fromProfile}
            closeModal={this.closeModal}
            photo={this.props.photo}/>
        </Modal>
      </main>
    );
  }
}

export default PhotoModal;
