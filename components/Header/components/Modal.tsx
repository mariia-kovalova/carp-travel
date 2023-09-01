'use client';

import { createPortal } from 'react-dom';

interface IProps {
  children: React.ReactNode;
}

const modalRoot = document.querySelector('#modal-root');

const Modal: React.FC<IProps> = ({ children }) => {
  return modalRoot ? createPortal(<div>{children}</div>, modalRoot) : null;
};

export default Modal;
