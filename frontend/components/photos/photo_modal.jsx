import React from 'react';
import Modal from 'react-modal';
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

  closeModal(event) {
    event.preventDefault();
    this.setState( { modalOpen: false } )
    this.props.history.push(`/${this.props.match.params.username}`)
  }

  render() {
    return (
      <div>
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
              afterOpen: 'afterOpen',
              beforeClose: 'beforeClose'
            }
          }
          overlayClassName={
            {
              base: 'base',
              afterOpen: 'overlay-default',
              beforeClose: 'close'
            }
          }
          isOpen={ this.state.modalOpen }>
          <p>modal</p>

        </Modal>
      </div>
    )
  }
}

export default PhotoModal;
