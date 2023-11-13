import React, { useEffect } from 'react';
import { Backdrop, BtnCloseModal } from './Modal.styled';
import sprite from '../../images/sprite.svg';

export const Modal = ({ onCloseModal, children }) => {
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
    <Backdrop onClick={onBackdropClick}>
      <BtnCloseModal type="button" onClick={onCloseModal}>
        <svg width="24" height="24">
          <use href={`${sprite}#icon-x`} />
        </svg>
      </BtnCloseModal>
      {children}
    </Backdrop>
  );
};
