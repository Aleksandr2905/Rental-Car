import React, { useEffect } from 'react';
import { Backdrop, ModalWrap } from './Modal.styled';

export const Modal = ({ onCloseModal, isOpen }) => {
  const onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  useEffect(() => {
    const handleEscape = event => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onCloseModal]);

  return (
    isOpen && (
      <Backdrop onClick={onBackdropClick}>
        <ModalWrap>Content</ModalWrap>
      </Backdrop>
    )
  );
};
