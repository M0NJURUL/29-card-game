import React, { useRef, useState } from 'react';
import Card from '../components/card design/Card';
import styles from './CardWrapper.module.css';

const CardWrapper = ({ id, card, player1, setPlayer1 }) => {
  const [isThrown, setIsThrown] = useState(false);
  const ref = useRef();

  const findRotationAngle = (id) => {
    const unit = 10;
    const offsetForOdd = player1.leftCards.length % 2 ? 0 : unit / 2;
    const diff = parseInt(player1.leftCards.length / 2);
    const angle = id - diff;
    return angle * unit + offsetForOdd;
  };

  const findTranslateYValue = (id) => {
    const unit = 1;
    const diff = parseInt(player1.leftCards.length / 2);
    const value =
      Math.abs(player1.leftCards.length - diff) * Math.abs(id - diff + 0.5);
    return value * unit;
  };

  const translateY = `translatey(${
    isThrown ? '-30vh' : `${findTranslateYValue(id)}px`
  })`;

  // const scale = isThrown ? 'scale(1.1)' : '';

  const rotate = ` rotate(${
    isThrown ? parseInt(Math.random() * 360) : findRotationAngle(id)
  }deg)`;

  const cardThrow = () => {
    setIsThrown((prev) => !prev);

    //   setPlayer1((prev) => ({
    //     ...prev,
    //     leftCards: prev.leftCards.filter((c) => c !== card),
    //     usedCards: [...prev.usedCards, card],
    //   }));
  };

  console.log(isThrown, rotate);
  return (
    <div
      ref={ref}
      className={styles.cardwrapper}
      style={{
        left: `${isThrown ? 100 : id * 30}px`,
        transform: translateY + rotate,
      }}
      onClick={cardThrow}
    >
      <Card value={card} />
    </div>
  );
};

export default CardWrapper;
