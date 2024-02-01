import React from 'react';
import styles from './SuitLogo.module.css';
import {
  BsFillSuitHeartFill,
  BsFillSuitDiamondFill,
  BsFillSuitSpadeFill,
  BsFillSuitClubFill,
} from "react-icons/bs";

const SuitLogo = ({ suit }) => {
    const heart_icon = <BsFillSuitHeartFill className={styles.red}/>;
    const spade_icon = <BsFillSuitSpadeFill className={[styles.black]} />;
    const diamond_icon = <BsFillSuitDiamondFill className={styles.red}/>;
    const club_icon = <BsFillSuitClubFill className={styles.black} />;
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

export default SuitLogo;