import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
    leftCards: new Set(['h8', 'd9', 'sk', 'cq', 'hk', 'dj', 's7']),
    usedCards: new Set([]),
  });
  const { tid, mates, bidder, bid, points } = team1;
  const { id, name, partnerId, leftCards, usedCards } = player1;
  const findRotationAngle = (id) => {
    const size = player1.leftCards.size;
    const diff = parseInt(size / 2);
    const angle = id - diff;
    return angle * 10;
  };
  const findTranslateValue = (id) => {
    const size = player1.leftCards.size;
    const diff = parseInt(size / 2);
    const value = Math.abs(id - diff);
    return value ** 3;
  };
  return (
    <div className={styles.outer}>
      <h2 className={styles.playerInfo}>{name}</h2>
      <div className={styles.stack}>
        {Array.from(leftCards).map((card, index) => {
          const translateY = `translateY(${findTranslateValue(index)}px)`;
          const rotate = ` rotate(${findRotationAngle(index)}deg)`;
          const translateX =
            player1.leftCards.size % 2 ? '' : ' translateX(40%)';
          return (
            <div
              key={index}
              className={styles.cardwrapper}
              style={{
                left: `${index * 50}px`,
                transform: translateY + rotate + translateX,
              }}
            >
              <Card value={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayerProfile;
