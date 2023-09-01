'use client';

import { createPortal } from 'react-dom';

interface IProps {
  children: React.ReactNode;
}

const Modal: React.FC<IProps> = ({ children }) => {
  const modalRoot = document.querySelector('#modal-root');

  return modalRoot ? createPortal(<>{children}</>, modalRoot) : null;
};

export default Modal;
