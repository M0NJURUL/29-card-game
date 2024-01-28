import React from 'react';
import styles from './TypeNameOrNum.module.css'

const TypeNameOrNum = ({ suit, type }) => {
  return suit === "S" || suit === "C" ? (
    <div className={styles.blackAndBold}>{type}</div>
  ) : (
    <div className={styles.redAndBold}>{type}</div>
  );
};

export default TypeNameOrNum;
