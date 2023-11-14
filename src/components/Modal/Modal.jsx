import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Backdrop, BtnCloseModal, Container } from './Modal.styled';
import sprite from '../../images/sprite.svg';

export const Modal = ({ isOpen, onCloseModal, children }) => {
  const onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  useEffect(() => {
    const handleEscape = event => {
      if (isOpen && event.key === 'Escape') {
        onCloseModal();
      }
    };
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onCloseModal]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <Backdrop onClick={onBackdropClick}>
      <Container
        id="modal-container"
        key="modal"
        animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BtnCloseModal type="button" onClick={onCloseModal}>
          <svg width="24" height="24">
            <use href={`${sprite}#icon-x`} />
          </svg>
        </BtnCloseModal>
        {children}
      </Container>
    </Backdrop>,
    document.getElementById('modal-root')
  );
};
