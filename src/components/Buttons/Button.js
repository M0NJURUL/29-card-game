import React from 'react';
import styles from './Button.module.css';

const Button = ({ action, buttonIcon, onClick }) => {
  return (
    <button
      className={action ? styles.button : styles.withoutAction}
      onClick={onClick}
    >
      <div className={action ? styles.action : ''}>{action}</div>
      <div className={styles.icon}>{buttonIcon}</div>
    </button>
  );
};

export default Button;
