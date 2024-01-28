import React, { useState } from 'react';
import Card from '../components/Card';
import styles from './PlayerProfile.module.css';

const PlayerProfile = () => {
  const player1Id = 'player1';
  const player2Id = 'player2';
  const team1Id = 'team1';
  const [team1, setTeam1] = useState({
    id: team1Id,
    mates: [player1Id, player2Id],
    bidder: player1Id,
    bid: 20,
    points: 0,
  });
  const [player1, setPlayer1] = useState({
    id: player1Id,
    name: 'Rafi Sakib',
    partnerId: player2Id,
    leftCards: new Set(['H10', 'D8', 'S7', 'C6', 'H4']),
    usedCards: new Set([]),
  });

  const { tid, mates, bidder, bid, points } = team1;
  const { id, name, partnerId, leftCards, usedCards } = player1;

  const findRotationAngle = (id) => {
    const unit = 10;
    const offsetForOdd = leftCards.size % 2 ? 0 : unit / 2;
    const diff = parseInt(leftCards.size / 2);
    const angle = id - diff;
    return angle * unit + offsetForOdd;
  };

  const findTranslateValue = (id) => {
    const unit = 0.7;
    const diff = parseInt(leftCards.size / 2);
    const value = Math.abs(leftCards.size - diff) * Math.abs(id - diff + 0.5);
    return value * unit;
  };

  return (
    <div
      className={styles.main}
      style={{ width: `${leftCards.size * 30 + 60}px` }}
    >
      <div className={styles.stack}>
        {Array.from(leftCards).map((card, index) => {
          const translateY = `translateY(${findTranslateValue(index)}px)`;
          const rotate = ` rotate(${findRotationAngle(index)}deg)`;
          return (
            <div
              key={index}
              className={styles.cardwrapper}
              style={{
                left: `${index * -60}px`,
                transform: translateY + rotate,
              }}
            >
              <Card value={card} />
            </div>
          );
        })}
      </div>
      <h2 className={styles.playerInfo}>{name}</h2>
    </div>
  );
};

export default PlayerProfile;
