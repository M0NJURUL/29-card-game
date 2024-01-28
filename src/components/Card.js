import React from "react";
import styles from "./Card.module.css";
import {
  BsFillSuitHeartFill,
  BsFillSuitDiamondFill,
  BsFillSuitSpadeFill,
  BsFillSuitClubFill,
} from "react-icons/bs";



const Logo = ({ suit }) => {
  const heart_icon = <BsFillSuitHeartFill className={styles.red}/>;
  const spade_icon = <BsFillSuitSpadeFill className={[styles.black]} />;
  const diamond_icon = <BsFillSuitDiamondFill className={styles.red}/>;
  const club_icon = <BsFillSuitClubFill className={styles.black} />;
  // console.log(typeof(suit));
  if (suit == 'h') {
    return <div>{heart_icon}</div>
  }
  else if (suit == 's') {
    return <div>{spade_icon}</div>
  }
  else if (suit == 'd') {
    return <div>{diamond_icon}</div>
  }
  else if (suit == 'c') {
    return <div>{club_icon}</div>
  }
};

const CardType = ({ suit, type }) => {
  return (suit == 's' || suit == 'c') ? <div className={styles.black}>{type}</div> : <div className={styles.red}>{type}</div>;
}

const Mark = ({suit, type }) => {
  return (
    <div className={styles.valuesFlexContainer}>
      
      <CardType suit={suit} type={type} />
      <Logo suit={suit}/>
    </div>
  );
};

const MarkReverse = ({suit, type }) => {
  return (
    <div className={styles.valuesFlexContainerReverse}>
      <div>{type}</div>
      <Logo suit={suit}/>
    </div>
  );
};

const Logos = ({ suit }) => {
  return (
  <div className={styles.logosGridContainer}>
    <div className={styles.place1}><Logo suit={suit}/></div> 
    <div className={styles.place2}><Logo suit={suit}/></div>
    <div className={styles.place3}><Logo suit={suit}/></div>
    <div className={styles.place4}><Logo suit={suit}/></div>
    <div className={styles.place5}><Logo suit={suit}/></div>

    <div className={styles.place6}><Logo suit={suit}/></div>
    <div className={styles.place7}><Logo suit={suit}/></div>
    <div className={styles.place8}><Logo suit={suit}/></div>
    <div className={styles.place9}><Logo suit={suit}/></div>
    <div className={styles.place10}><Logo suit={suit}/></div>

    <div className={styles.place11}><Logo suit={suit}/></div>
    <div className={styles.place12}><Logo suit={suit}/></div>
    <div className={styles.place13}><Logo suit={suit}/></div>
    <div className={styles.place14}><Logo suit={suit}/></div>
    <div className={styles.place15}><Logo suit={suit}/></div>
    {/* <div className="face"><Logo suit={suit}></Logo></div>  */}
  </div>

  );
}

const TestCard = ({ value }) => {
  const suit = value.substring(0, 1);
  const type = value.substring(1, 2);

  return (
    <div className={styles.wholeCardGridContainer}>
      <Mark suit={suit} type={type}/>
      <Logos suit={suit}/>
      {/* <Mark suit={suit} type={type}/> */}
      <MarkReverse suit={suit} type={type} />
    </div>
  );
};
export default TestCard;
