import React from "react";
import styles from "./CardTopLeft.module.css";
import SmallSuitLogo from "./SmallSuitLogo";
import TypeNameOrNum from "./TypeNameOrNum";

const CardTopLeft = ({ suit, type }) => {
  if (suit === "X") return;
  return (
    <div className={styles.valuesFlexContainer}>
      <TypeNameOrNum suit={suit} type={type} />
      <SmallSuitLogo suit={suit} />
    </div>
  );
};

export default CardTopLeft;
