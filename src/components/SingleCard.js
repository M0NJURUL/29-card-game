import React from "react";
import styles from "./SingleCard.module.css";

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

export default SingleCard;
