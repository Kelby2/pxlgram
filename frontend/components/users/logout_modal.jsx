import React from 'react';
import Modal from 'react-modal';

const LogoutModal = props => {
  Modal.setAppElement('body');

  return (
    <Modal
      htmlOpenClassName='ReactModal__Html--open'
      onRequestClose={props.onModalClose}
      className={classNames.modalClassName}
      overlayClassName={classNames.overlayClassName}
      isOpen={props.isOpen}>
      <div
        className="fa fa-times fa-lg"
        id="close-button"
        onClick={props.onModalClose}>
      </div>
      <div className='logout-container'>
        <button className='logout-btns' onClick={props.onLogoutConfirm}>
          <p id='logout-text'>Log Out</p>
        </button>
        <button className='logout-btns' onClick={props.onModalClose}>Cancel</button>
      </div>
    </Modal>
  );
};

const classNames = {
  modalClassName: {
    base: 'logoutModalBaseClass',
    afterOpen: '',
    beforeClose: ''
  },
  overlayClassName: {
    base: 'overlay-base',
    afterOpen: 'overlay-default',
    beforeClose: ''
  }
};

export default LogoutModal;
