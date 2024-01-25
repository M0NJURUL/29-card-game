import React from "react";
import styles from "./SingleCard.module.css";
import { BsFillSuitHeartFill, BsFillSuitDiamondFill, BsFillSuitSpadeFill, BsFillSuitClubFill } from "react-icons/bs";

const Logo = ({ value }) => {
  const png_logo = [];
  return (
    <div className={styles.images}>
      {Array(value).fill(
        <img
          className={styles.largeLogo}
          src="./card images/heart.png"
          alt="logo"
        />
      )}
      {/* <img src="./card images/heart.png" alt="logo"/> */}
    </div>
  );
};

const CardIdentity = ({ value }) => {
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

const SingleCard = ({ value, type }) => {
  const image = [];
  return (
    <div className={styles.card}>
      <div className={styles.identity1}>
        <CardIdentity value={value} />
      </div>
      <div className={styles.images}>
        <Logo value={value} />
      </div>
      <div className={styles.identity2}>
        <CardIdentity value={value} />
      </div>
    </div>
  );
};


const TestCard = ({ value }) => {
  const suit = value.substring(0,1)
  const type = value.substring(1,2)
  const heart_icon = <BsFillSuitHeartFill />
  const spade_icon = <BsFillSuitSpadeFill className={styles.black}/>
  const daimond_icon = <BsFillSuitDiamondFill />
  const club_icon = <BsFillSuitClubFill className={styles.black}/>

  return (
    <div className={styles.card}>
      {/* <div className={styles.identity1}>
        <CardIdentity value={value} />
      </div>
      <div className={styles.images}>
        <Logo value={value} />
      </div>
      <div className={styles.identity2}>
        <CardIdentity value={value} />
      </div> */}
      <div>suit = {suit}</div>
      <div>type = {type}</div>

      <div>
        {heart_icon}
        {spade_icon}
        {daimond_icon}
        {club_icon}
      </div>
    </div>
  );
};
export default TestCard;
// export default SingleCard;
