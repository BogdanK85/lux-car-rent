import React, { useEffect } from 'react';
import { ModalPortal } from './ModalPortal';
import sprite from '../../images/sprite.svg';
import {
  BackdropModal,
  CloseBtnWrapper,
  ModalContainer,
} from './ModalWindowWrap.styled';

export const ModalWindowWrap = ({ onClick, children }) => {
  const onKeyDown = evt => {
    if (evt.code === 'Escape') {
      onClick();
    }
  };

  const onClickClose = () => {
    onClick();
  };

  const onClickBackDrop = evt => {
    if (evt.currentTarget === evt.target) {
      onClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  return (
    <ModalPortal>
      <BackdropModal onClick={onClickBackDrop}>
        <ModalContainer>
          <CloseBtnWrapper onClick={onClickClose}>
            <use href={`${sprite}#icon-x`} />
          </CloseBtnWrapper>
          {children}
        </ModalContainer>
      </BackdropModal>
    </ModalPortal>
  );
};
