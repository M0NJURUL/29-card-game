import React from 'react';
import styles from './CardBottomRight.module.css';
import SuitLogo from './SuitLogo';
import TypeNameOrNum from './TypeNameOrNum';

const CardBottomRight = ({suit, type }) => {
    return (
      <div className={styles.valuesFlexContainerReverse}>
        <TypeNameOrNum suit={suit} type={type} />
        <SuitLogo suit={suit}/>
      </div>
    );
  };

  export default CardBottomRight;