import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
    leftCards: new Set(['h8', 'd9', 'sk', 'cq', 'hk', 'dj', 's7', 'ca']),
    usedCards: new Set([]),
  });
  const { tid, mates, bidder, bid, points } = team1;
  const { id, name, partnerId, leftCards, usedCards } = player1;
  return (
    <div className={styles.main}>
      <h2>{name}</h2>
      <div>
        {Array.from(leftCards).map((card, index) => (
          <span key={index}>{card} </span>
        ))}
      </div>
    </div>
  );
};

export default PlayerProfile;
