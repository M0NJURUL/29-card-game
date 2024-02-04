import React from "react";
import styles from "./OppositePointSection.module.css";
import Card from "../card design/Card";

const OppositePointSection = ({ term_result, point }) => {
  // total point calculation
  const total_point = 3;

  if (Math.abs(total_point) === 0) {
    return (
      <div className={styles.oppositeTeam}>
        {total_point < 0 ? (
          <div className={styles.negative}>
            <Card value="C6" />
          </div>
        ) : (
          <div className={styles.positive}>
            <Card value="D6" />
          </div>
        )}
        <div className={styles.flipped0}>
          <Card value="X" />
        </div>
      </div>
    );
  } else if (Math.abs(total_point) === 1) {
    return (
      <div className={styles.oppositeTeam}>
        {total_point < 0 ? (
          <div className={styles.negative}>
            <Card value="C6" />
          </div>
        ) : (
          <div className={styles.positive}>
            <Card value="D6" />
          </div>
        )}
        <div className={styles.flipped1}>
          <Card value="X" />
        </div>
      </div>
    );
  } else if (Math.abs(total_point) === 2) {
    return (
      <div className={styles.oppositeTeam}>
        {total_point < 0 ? (
          <div className={styles.negative}>
            <Card value="C6" />
          </div>
        ) : (
          <div className={styles.positive}>
            <Card value="D6" />
          </div>
        )}
        <div className={styles.flipped2}>
          <Card value="X" />
        </div>
      </div>
    );
  } else if (Math.abs(total_point) === 3) {
    return (
      <div className={styles.oppositeTeam}>
        {total_point < 0 ? (
          <div className={styles.negative}>
            <Card value="C6" />
          </div>
        ) : (
          <div className={styles.positive}>
            <Card value="D6" />
          </div>
        )}
        <div className={styles.flipped3}>
          <Card value="X" />
        </div>
      </div>
    );
  } else if (Math.abs(total_point) === 4) {
    return (
      <div className={styles.oppositeTeam}>
        {total_point < 0 ? (
          <div className={styles.negative}>
            <Card value="C6" />
          </div>
        ) : (
          <div className={styles.positive}>
            <Card value="D6" />
          </div>
        )}
        <div className={styles.flipped4}>
          <Card value="X" />
        </div>
      </div>
    );
  } else if (Math.abs(total_point) === 5) {
    return (
      <div className={styles.oppositeTeam}>
        {total_point < 0 ? (
          <div className={styles.negative}>
            <Card value="C6" />
          </div>
        ) : (
          <div className={styles.positive}>
            <Card value="D6" />
          </div>
        )}
        <div className={styles.flipped5}>
          <Card value="X" />
        </div>
      </div>
    );
  } else if (Math.abs(total_point) === 6) {
    return (
      <div className={styles.oppositeTeam}>
        {total_point < 0 ? (
          <div className={styles.negative}>
            <Card value="C6" />
          </div>
        ) : (
          <div className={styles.positive}>
            <Card value="D6" />
          </div>
        )}
        <div className={styles.flipped6}>
          <Card value="X" />
        </div>
      </div>
    );
  }
};

export default OppositePointSection;
