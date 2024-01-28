import React, { useState } from 'react';
import Card from '../components/Card';
import styles from './CardWrapper.module.css';

const CardWrapper = ({ id, card, player1, setPlayer1 }) => {
  const [isThrown, setIsThrown] = useState(false);

  const findRotationAngle = (id) => {
    const unit = 10;
    const offsetForOdd = player1.leftCards.length % 2 ? 0 : unit / 2;
    const diff = parseInt(player1.leftCards.length / 2);
    const angle = id - diff;
    return angle * unit + offsetForOdd;
  };

  const findTranslateValue = (id) => {
    const unit = 1;
    const diff = parseInt(player1.leftCards.length / 2);
    const value =
      Math.abs(player1.leftCards.length - diff) * Math.abs(id - diff + 0.5);
    return value * unit;
  };

  const translateY = `translateY(${
    isThrown ? '-30vh' : `${findTranslateValue(id)}px`
  })`;

  const rotate = ` rotate(${findRotationAngle(id)}deg)`;

  const cardThrow = (card) => {
    console.log(card);
    setIsThrown(true);

    // set player's value only when the whole term is finished
    setTimeout(
      setPlayer1((prev) => ({
        ...prev,
        leftCards: prev.leftCards.filter((c) => c !== card),
        usedCards: [...prev.usedCards, card],
      })),
      3000
    );
  };

  console.log(id, player1.usedCards, player1.leftCards);

  return (
    <div
      className={styles.cardwrapper}
      style={{
        left: `${id * -60}px`,
        transform: translateY + rotate,
      }}
      onClick={() => cardThrow(card)}
    >
      <Card value={card} />
    </div>
  );
};

export default CardWrapper;
