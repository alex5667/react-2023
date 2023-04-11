import React, { FC } from 'react';
import cl from './Modal.module.scss';

interface Modal {
  visible: boolean;
  setVisible: (bool: boolean) => void;
  children: React.ReactNode | JSX.Element;
}

const Modal: FC<Modal> = ({ visible, setVisible, children }) => {
  const rootClasses = [cl.modal];
  const contentClasses = [cl.modalContent];
  if (visible) {
    rootClasses.push(cl.active);
    contentClasses.push(cl.active);
  }
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.modalWrapper}>
        <button type="button" className={cl.modalClose} onClick={() => setVisible(false)}>
          <span></span>
        </button>
        <div className={contentClasses.join(' ')} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
