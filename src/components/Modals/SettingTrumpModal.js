import React, { useEffect } from 'react';
import CardMiddle from '../card design/CardMiddle';
import styles from './SettingTrumpModal.module.css';

const SettingTrumpModal = () => {
  const cards = ['H7', 'S7', 'D7', 'C7'];
  return (
    <div className="">
      <div>Trump setting modal</div>
      <div className={styles.cards}>
        {cards.map((c, index) => (
          <CardMiddle key={index} suit={c[0]} type={c[1]} />
        ))}
      </div>
    </div>
  );
};

export default SettingTrumpModal;
