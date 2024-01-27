import React from 'react';
import styles from './Card.module.css';
import {
  BsFillSuitHeartFill,
  BsFillSuitDiamondFill,
  BsFillSuitSpadeFill,
  BsFillSuitClubFill,
} from 'react-icons/bs';

const Logo = ({ suit }) => {
  const heart_icon = <BsFillSuitHeartFill />;
  const spade_icon = <BsFillSuitSpadeFill className={styles.black} />;
  const diamond_icon = <BsFillSuitDiamondFill />;
  const club_icon = <BsFillSuitClubFill className={styles.black} />;
  if (suit == 'h') {
    return <div>{heart_icon}</div>;
  } else if (suit == 'd') {
    return <div>{spade_icon}</div>;
  } else if (suit == 'h') {
    return <div>{diamond_icon}</div>;
  } else if (suit == 'h') {
    return <div>{heart_icon}</div>;
  }
};

const Values = ({ value }) => {
  const something = [];
  return (
    <div className={styles.identity}>
      <div className={styles.smallLogo}>
        <img src="./card images/heart.png" alt="logo" />
      </div>
      <div>{value}</div>
    </div>
  );
};

const Mark = () => {
  return (
    <div className="values-flex-container">
      <div>
        <Logo />
      </div>
      <div>hearts</div>
    </div>
  );
};

const TestCard = ({ value }) => {
  const suit = value.substring(0, 1);
  const type = value.substring(1, 2);

  return (
    <div className={styles.wholeCardGridContainer}>
      <Mark />
      <Logo suit={suit} />
      <Mark />
    </div>
  );
};
export default TestCard;
// export default SingleCard;
