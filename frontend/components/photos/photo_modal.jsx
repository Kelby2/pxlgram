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

  closeModal() {
    this.setState( { modalOpen: false } )
    debugger
    this.props.history.push(`/${this.props.match.params.username}`)
  }

  render() {
    return (
      <div>
        <Modal
          onRequestClose={ this.closeModal }
          overlayClassName={
            {
              base: 'base',
              afterOpen: 'overlay-default',
              beforeClose: 'close'
            }
          }
          isOpen={ this.state.modalOpen }>
          <h1>hello</h1>
          <p>modal</p>
          <Link to={`/friend`}>friend!</Link>
          <button onClick={ this.closeModal }>
            close
          </button>
        </Modal>
      </div>
    )
  }
}

export default PhotoModal;
