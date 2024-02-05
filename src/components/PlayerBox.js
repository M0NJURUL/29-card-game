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
    transform: 'translateX(-50%)',
  },
  left: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  right: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
};

const PlayerBox = ({ children, boxPosition = 'bottom' }) => {
  return <div style={styles[boxPosition]}>{children}</div>;
};

export default PlayerBox;
