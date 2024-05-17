import React, { useState } from 'react';
import styles from './Modal.module.css';
import Button from '../Buttons/Button';
import { IoClose } from 'react-icons/io5';

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <div className={styles.close}>
          <Button action={''} buttonIcon={<IoClose />} onClick={handleClose} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
