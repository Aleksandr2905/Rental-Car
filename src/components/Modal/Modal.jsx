import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Backdrop, BtnCloseModal, Container } from './Modal.styled';
import sprite from '../../images/sprite.svg';

const modalPortal = document.getElementById('modal-portal');

const Modal = ({ isModalOpen, onCloseModal, children }) => {
  const onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  useEffect(() => {
    const handleEscape = event => {
      if (isModalOpen && event.key === 'Escape') {
        onCloseModal();
      }
    };
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen, onCloseModal]);

  if (!isModalOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <Backdrop onClick={onBackdropClick}>
      <Container>
        <BtnCloseModal type="button" onClick={onCloseModal}>
          <svg width="24" height="24">
            <use href={`${sprite}#icon-x`} />
          </svg>
        </BtnCloseModal>
        {children}
      </Container>
    </Backdrop>,
    modalPortal
  );
};

export default Modal;
