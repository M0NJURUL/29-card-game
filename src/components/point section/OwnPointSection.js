import React from "react";
import styles from "./OwnPointSection.module.css";
import Card from "../card design/Card";

const OwnPointSection = ({ term_result, point }) => {
  // total point calculation
  const total_point = 2;

  if (Math.abs(total_point) === 0) {
    return (
      <div className={styles.ownTeam}>
        {total_point < 0 ? (
          <div className={styles.negative}>
            <Card value="S6" />
          </div>
        ) : (
          <div className={styles.positive}>
            <Card value="H6" />
          </div>
        )}
        <div className={styles.flipped0}>
          <Card value="X" />
        </div>
      </div>
    );
  } else if (Math.abs(total_point) === 1) {
    return (
      <div className={styles.ownTeam}>
        {total_point < 0 ? (
          <div className={styles.negative}>
            <Card value="S6" />
          </div>
        ) : (
          <div className={styles.positive}>
            <Card value="H6" />
          </div>
        )}
        <div className={styles.flipped1}>
          <Card value="X" />
        </div>
      </div>
    );
  } else if (Math.abs(total_point) === 2) {
    return (
      <div className={styles.ownTeam}>
        {total_point < 0 ? (
          <div className={styles.negative}>
            <Card value="S6" />
          </div>
        ) : (
          <div className={styles.positive}>
            <Card value="H6" />
          </div>
        )}
        <div className={styles.flipped2}>
          <Card value="X" />
        </div>
      </div>
    );
  } else if (Math.abs(total_point) === 3) {
    return (
      <div className={styles.ownTeam}>
        {total_point < 0 ? (
          <div className={styles.negative}>
            <Card value="S6" />
          </div>
        ) : (
          <div className={styles.positive}>
            <Card value="H6" />
          </div>
        )}
        <div className={styles.flipped3}>
          <Card value="X" />
        </div>
      </div>
    );
  } else if (Math.abs(total_point) === 4) {
    return (
      <div className={styles.ownTeam}>
        {total_point < 0 ? (
          <div className={styles.negative}>
            <Card value="S6" />
          </div>
        ) : (
          <div className={styles.positive}>
            <Card value="H6" />
          </div>
        )}
        <div className={styles.flipped4}>
          <Card value="X" />
        </div>
      </div>
    );
  } else if (Math.abs(total_point) === 5) {
    return (
      <div className={styles.ownTeam}>
        {total_point < 0 ? (
          <div className={styles.negative}>
            <Card value="S6" />
          </div>
        ) : (
          <div className={styles.positive}>
            <Card value="H6" />
          </div>
        )}
        <div className={styles.flipped5}>
          <Card value="X" />
        </div>
      </div>
    );
  } else if (Math.abs(total_point) === 6) {
    return (
      <div className={styles.ownTeam}>
        {total_point < 0 ? (
          <div className={styles.negative}>
            <Card value="S6" />
          </div>
        ) : (
          <div className={styles.positive}>
            <Card value="H6" />
          </div>
        )}
        <div className={styles.flipped6}>
          <Card value="X" />
        </div>
      </div>
    );
  }
};

export default OwnPointSection;
