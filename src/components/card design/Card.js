import React from "react";
import styles from "./Card.module.css";
import CardTopLeft from "./CardTopLeft.js";
import CardMiddle from "./CardMiddle.js";
import CardBottomRight from "./CardBottomRight.js";

const TestCard = ({ value }) => {
  const suit = value.substring(0, 1);
  const type = value.substring(1);

  return (
    
    <div className={styles.wholeCardGridContainer}>
      <CardTopLeft suit={suit} type={type}/>
      <CardMiddle suit={suit} type={type}/>
      <CardBottomRight suit={suit} type={type} />
    </div>
  );
};
export default TestCard;