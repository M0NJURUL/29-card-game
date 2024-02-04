import React from 'react';
import styles from './SmallSuitLogo.module.css';
import {
  BsFillSuitHeartFill,
  BsFillSuitDiamondFill,
  BsFillSuitSpadeFill,
  BsFillSuitClubFill,
} from "react-icons/bs";

const SmallSuitLogo = ({ suit }) => {
    const heart_icon = <BsFillSuitHeartFill className={styles.redAndSmall}/>;
    const spade_icon = <BsFillSuitSpadeFill className={styles.blackAndSmall} />;
    const diamond_icon = <BsFillSuitDiamondFill className={styles.redAndSmall}/>;
    const club_icon = <BsFillSuitClubFill className={styles.blackAndSmall} />;
    // console.log(typeof(suit));
    if (suit === 'H') {
      return <div>{heart_icon}</div>
    }
    else if (suit === 'S') {
      return <div>{spade_icon}</div>
    }
    else if (suit === 'D') {
      return <div>{diamond_icon}</div>
    }
    else if (suit === 'C') {
      return <div>{club_icon}</div>
    }
  };

export default SmallSuitLogo;