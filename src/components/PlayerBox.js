import React from 'react';

const styles = {
  bottom: {
    position: 'absolute',
    left: '50%',
    bottom: 0,
    transform: 'translateX(-50%)',
  },
  up: {
    position: 'absolute',
    left: '50%',
    top: 0,
    transform: 'translateX(-50%) rotate(180deg)',
  },
  left: {
    position: 'absolute',
    left: '-10%',
    top: '50%',
    transform: 'translateY(-50%) rotate(90deg)',
  },
  right: {
    position: 'absolute',
    right: '-10%',
    top: '50%',
    transform: 'translateY(-50%) rotate(-90deg)',
  },
};

const PlayerBox = ({ children, boxPosition }) => {
  return <div style={styles[boxPosition]}>{children}</div>;
};

export default PlayerBox;
