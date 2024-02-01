import React, { useState } from 'react';
<<<<<<< HEAD
=======
import { v4 as uuidv4 } from 'uuid';
import Card from '../components/card design/Card';
>>>>>>> card-design
import styles from './PlayerProfile.module.css';
import CardWrapper from './CardWrapper';

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
    leftCards: ['H10', 'D8', 'S7', 'C6', 'H4', 'CQ', 'CK', 'HK'],
    usedCards: [],
  });
  const { tid, mates, bidder, bid, points } = team1;
  const { id, name, partnerId, leftCards, usedCards } = player1;
  const tempCards = [...leftCards];

  return (
    <div
      style={{
        width: '100%',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className={styles.stack}
        style={{ width: `${leftCards.length * 30 + 60}px` }}
      >
        {tempCards.map((card, index) => {
          return (
            <CardWrapper
              key={index}
              id={index}
              card={card}
              player1={player1}
              setPlayer1={setPlayer1}
            />
          );
        })}
      </div>
      <h2 className={styles.playerInfo}>{name}</h2>
    </div>
  );
};

export default PlayerProfile;
